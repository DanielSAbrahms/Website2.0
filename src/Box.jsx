import React from "react";
import $ from "jquery";
import infoBoxImage from "./assets/infoIcon.svg";
import infoIconCloseImage from "./assets/infoIconClose.png";
import infoIconMeltAnimationSpriteSheet from "./assets/infoIconMeltAnimation.png";
import "./styles/box.css";
import {
	TweenLite,
	TimelineMax,
	SteppedEase,
	TweenMax,
	TimelineLite,
	Expo
} from "gsap";
import BoxContentCamera from "./BoxContentCamera";

export default class Box extends React.Component {
	constructor(props) {
		super(props);
		this.infoBox = null;
		this.alertBox = null;
		this.infoIcon = null;
		this.content = null;
		this.state = {
			isInfoHidden: true,
			iconStatus: "Running",
			notificationList: [],
			openInfoBox: new TimelineMax({
				paused: true
			}),
			iconMelt: new TimelineLite({
				paused: true
			}),
			newNotificationPulse: new TimelineMax({
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
		this.state.openInfoBox.to(this.infoBox, 0.5, {
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

		// this.state.iconMelt.to(this.infoIcon, 0.5, {
		// 	backgroundPosition: "-1300px",
		// 	ease: SteppedEase.config(13),
		// 	onReverseComplete: function() {
		// 		self.setState(state => ({
		// 			iconStatus: "Closed"
		// 		}));
		// 	}
		// });
		this.state.iconMelt.progress(1).progress(0);
		this.state.newNotificationPulse.to(this.alertBox, 0.25, {
			backgroundColor: "#FFFFFF",
			repeat: 1,
			yoyo: true
		});
		this.state.newNotificationPulse.progress(1).progress(0);
	}
	toggleInfo(e) {
		e.preventDefault();
		this.setState(this.state);
		this.state.isInfoHidden ? this.showInfo() : this.closeInfo();
	}
	showInfo() {
		this.setState(state => ({
			isInfoHidden: false,
			iconStatus: "Running"
		}));

		this.state.openInfoBox.play();
	}
	closeInfo() {
		this.setState(state => ({
			isInfoHidden: true,
			iconStatus: "Running"
		}));
		// Play the reverse animation faster for impatient users
		this.state.openInfoBox.reverse().timeScale(2);
		var self = this;
		// TweenMax.delayedCall(0.25, function() {
		// 	self.state.iconMelt.reverse();
		// });
	}
	showNotification(notificationText) {
		var newList = this.state.notificationList;
		newList.push(notificationText);
		this.setState(state => ({
			notificationList: newList
		}));
		this.state.newNotificationPulse.play();
	}
	renderInfoIcon() {
		var spriteSheetStyle = {
			background: "url(" + infoIconMeltAnimationSpriteSheet + ")"
		};
		switch (this.state.iconStatus) {
			case "Closed":
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
			case "Running":
			// return (
			// 	<div
			// 		style={spriteSheetStyle}
			// 		className="infoIcon"
			// 		ref={div => (this.infoIcon = div)}
			// 	/>
			// );
			case "Open":
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
					className="boxAlertWrapper"
					ref={div => (this.alertBox = div)}
				>
					{notificationList.map((item, index) => (
						<div key={index} className="boxAlertContent">
							<div className="notificationText">{item}</div>
							<img
								src={infoIconCloseImage}
								fill="#000000"
								className="notificationCloseIcon"
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}
