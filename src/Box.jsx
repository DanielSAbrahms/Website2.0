import React from "react";
import infoBoxImage from "./assets/infoIcon.svg";
import infoIconCloseImage from "./assets/infoIconClose.png";
import "./styles/box.css";
import { TweenLite, TimelineMax, TimelineLite, Expo } from "gsap";
import BoxContentCamera from "./BoxContentCamera";
import BoxNotification from "./BoxNotification";

export default class Box extends React.Component {
	constructor(props) {
		super(props);
		this.infoBox = null;
		this.alertBox = null;
		this.infoIcon = null;
		this.content = null;
		this.noticationAnimationDuration = 0.5; // In seconds
		this.infoAnimationDuration = 0.35;
		this.state = {
			isInfoHidden: true,
			iconStatus: "Closed",
			notificationList: [],
			openInfoBox: new TimelineMax({
				paused: true
			}),
			newNotificationPulse: new TimelineLite({
				paused: true
			})
		};
		this.toggleInfo = this.toggleInfo.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.closeInfo = this.closeInfo.bind(this);
		this.showNotification = this.showNotification.bind(this);
		this.renderInfoIcon = this.renderInfoIcon.bind(this);
	}
	componentDidMount() {
		var self = this;
		TweenLite.set(this.infoBox, { scaleY: 0, transformOrigin: "50% 0%" });
		this.state.openInfoBox.to(this.infoBox, this.infoAnimationDuration, {
			scaleY: 1,
			height: "100px",
			transformOrigin: "50% 0%",
			onComplete: function() {
				self.setState(state => ({
					iconStatus: "Open"
				}));
			},
			onReverseComplete: function() {
				self.setState(state => ({
					iconStatus: "Closed"
				}));
			}
			// ease: Expo.easeOut
		});
		this.state.openInfoBox.progress(1).progress(0);

		TweenLite.set(this.alertBox, { height: "100%" });
		this.state.newNotificationPulse.from(
			this.alertBox,
			this.noticationAnimationDuration,
			{
				y: -10,
				height: "0px",
				opacity: 0,
				ease: Expo.easeIn
			}
		);
		this.state.newNotificationPulse.progress(1).progress(0);
	}
	toggleInfo(e) {
		e.preventDefault();
		this.setState(this.state);
		this.state.isInfoHidden ? this.showInfo() : this.closeInfo();
	}
	showInfo() {
		this.setState(state => ({
			isInfoHidden: false
		}));

		this.state.openInfoBox.play();
	}
	closeInfo() {
		this.setState(state => ({
			isInfoHidden: true
		}));
		// Play the reverse animation faster
		this.state.openInfoBox.reverse().timeScale(2);
	}
	showNotification(notificationText) {
		var newList = this.state.notificationList;
		newList.push(notificationText);
		this.setState(state => ({
			notificationList: newList
		}));
		this.state.newNotificationPulse.play();
	}
	closeNotification(notificationIndex) {
		var self = this;
		setTimeout(function() {
			var newList = self.state.notificationList;
			newList.splice(notificationIndex, 1);
			self.setState(state => ({
				notificationList: newList
			}));
		}, 1000 * self.noticationAnimationDuration);
		this.state.newNotificationPulse.reverse();
	}
	renderInfoIcon() {
		switch (this.state.isInfoHidden) {
			case true:
				return (
					<div>
						<img src={infoBoxImage} className="infoIcon" />
						<div
							hidden
							style={null}
							className="infoIcon"
							ref={div => (this.infoIcon = div)}
						/>
					</div>
				);
			case false:
				return (
					<div>
						<img src={infoIconCloseImage} className="infoIcon" />
						<div
							hidden
							style={null}
							className="infoIcon"
							ref={div => (this.infoIcon = div)}
						/>
					</div>
				);
			default:
				return (
					<p className="infoIcon" ref={div => (this.infoIcon = div)}>
						Error
					</p>
				);
		}
	}
	render() {
		var notificationList = Array.from(this.state.notificationList);
		return (
			<div className="box">
				<div className="boxTitle">
					<div className="boxTitleText">
						<h3>{this.props.boxTitle}</h3>
					</div>
					<div
						className="boxTitleInfo"
						onClick={this.toggleInfo}
						title={"More on " + this.props.boxTitle}
					>
						{this.renderInfoIcon()}
					</div>
				</div>
				<div
					className="boxInfoContent"
					ref={div => (this.infoBox = div)}
				>
					{this.props.boxInfoContent}
				</div>

				<div className="boxContentWrapper">
					<div
						className="boxContent"
						ref={div => (this.content = div)}
					>
						<BoxContentCamera
							boxItem={this.props.boxContent}
							showNotification={this.showNotification}
						/>
					</div>
				</div>
				<div
					className="boxNotificationWrapper"
					ref={div => (this.alertBox = div)}
				>
					{notificationList.map((item, index) => (
						<BoxNotification
							index={index}
							closeNotification={this.closeNotification}
							notificationContent={item}
						/>
					))}
				</div>
			</div>
		);
	}
}
