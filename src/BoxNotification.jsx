import React from "react";
import infoIconCloseImage from "./assets/infoIconClose.png";
import "./styles/boxNotification.css";

export default class BoxNotification extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="boxNotification">
				<div className="notificationText">
					{this.props.notificationContent}
				</div>
				<img
					src={infoIconCloseImage}
					fill="#000000"
					className="notificationCloseIcon"
					onClick={() =>
						this.props.closeNotification(this.props.index)
					}
				/>
			</div>
		);
	}
}
