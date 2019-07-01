import React from "react";
import "../styles/arpLite.css";
import vis from "vis";

import "vis/dist/vis.min.css";

export default class ArpLite extends React.Component {
	constructor(props) {
		super(props);
		this.showNotification = this.props.showNotification;
		this.state = {
			visTimeline: null,
			items: new vis.DataSet([
				{ id: 1, type: "point", content: "item 1", start: 10 },
				{ id: 2, type: "point", content: "item 2", start: 11 }
			])
		};
		this.visualWrapper = null;
	}
	componentDidMount() {
		var options = {
			width: "100%",
			height: "300px",
			start: 0,
			end: 180,
			min: 0,
			max: 180,
			editable: true
		};
		this.setState(state => ({
			visTimeline: new vis.Timeline(
				this.visualWrapper,
				this.state.items,
				options
			)
		}));
		this.showNotification("1 This is a test notification.");
	}
	render() {
		return (
			<div className="ArpLiteBox">
				<div
					className="visualWrapper"
					ref={div => (this.visualWrapper = div)}
				/>
			</div>
		);
	}
}
