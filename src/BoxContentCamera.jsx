import React from "react";
import ArpLite from "./BoxLibrary/ArpLite";
import Introduction from "./BoxLibrary/Introduction";
import "./styles/boxContentCamera.css";

import "vis/dist/vis.min.css";

export default class BoxContentCamera extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.showNotification = this.showNotification.bind(this);
	}
	componentDidMount() {}
	showNotification(text) {
		this.props.showNotification(text);
	}
	render() {
		switch (this.props.boxItem) {
			case "Introduction":
				return (
					<Introduction showNotification={this.showNotification} />
				);
			case "ArpLite":
				return <ArpLite showNotification={this.showNotification} />;
			case "Text":
				return <p>Text Text Text</p>;
			default:
				return <h1>No Box Item Defined</h1>;
		}
	}
}
