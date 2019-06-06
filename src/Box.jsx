import React from "react";

import "./assets/infoBox.svg";
import "./assets/infoIconMeltAnimation.png";
import "./styles/box.css";
import { TweenLite, TimelineMax, SteppedEase, TweenMax } from "gsap";

export default class Box extends React.Component {
	constructor(props) {
		super(props);
		this.infoBox = null;
		this.infoIcon = null;
		this.state = {
			isInfoHidden: true,
			openInfoBox: new TimelineMax({
				paused: true
			}),
			iconMelt: new TimelineMax({
				paused: true
			})
		};
		this.toggleInfo = this.toggleInfo.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.closeInfo = this.closeInfo.bind(this);
	}
	componentDidMount() {
		TweenLite.set(this.infoBox, { scaleY: 0, transformOrigin: "50% 0%" });
		this.state.openInfoBox.to(this.infoBox, 0.5, {
			scaleY: 1,
			transformOrigin: "50% 0%"
		});
		this.state.openInfoBox.progress(1).progress(0);

		TweenLite.set(this.infoBox, { scaleY: 0, transformOrigin: "50% 0%" });
		this.state.iconMelt.to(this.infoIcon, 0.5, {
			backgroundPosition: "-1300px",
			ease: SteppedEase.config(12)
		});
		this.state.iconMelt.progress(1).progress(0);
	}
	toggleInfo(e) {
		e.preventDefault();
		this.state.isInfoHidden ? this.showInfo() : this.closeInfo();
	}
	showInfo() {
		this.setState(state => ({
			isInfoHidden: false
		}));
		this.state.openInfoBox.play();
		this.state.iconMelt.play();
	}
	closeInfo() {
		this.setState(state => ({
			isInfoHidden: true
		}));
		this.state.openInfoBox.reverse();
		this.state.iconMelt.reverse();
	}
	render() {
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
						<div
							className="infoIcon"
							src="./assets/infoIcon.svg"
							ref={div => (this.infoIcon = div)}
						/>
					</div>
				</div>
				<div
					className="boxInfoContent"
					ref={div => (this.infoBox = div)}
				>
					{this.props.boxInfoContent}
				</div>
				<div className="boxContent">{this.props.boxContent}</div>
			</div>
		);
	}
}
