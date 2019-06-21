import React from "react";
import Title from "./Title";
import Column from "./Column";
import "./styles/main.css";
import { Row, Col, Container } from "react-bootstrap";
import Box from "./Box";

export default class Main extends React.Component {
	render() {
		var colList = [];
		var text1 =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec rutrum massa. Duis mollis pellentesque dolor, eget vestibulum magna sodales sed. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti. Aenean cursus imperdiet elementum. Nunc ultrices ullamcorper eleifend. Nunc posuere odio vel tincidunt tristique.";
		var text2 =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec rutrum massa. Duis mollis pellentesque dolor, eget vestibulum magna sodales sed. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti. Aenean cursus imperdiet elementum.";
		var text3 =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti.";
		const boxCollection = [
			["Introduction", "Introduction"],
			["ArpLite", "ArpLite"],
			["Box1", "Text"],
			["ArpLite", "ArpLite"],
			["Box2", "Text"],
			["ArpLite", "ArpLite"],
			["Box3", "Text"],
			["ArpLite", "ArpLite"],
			["Box4", "Text"],
			["Box5", "Text"]
		];
		for (var index = 0; index < boxCollection.length; index++) {
			colList.push(boxCollection[index]);
		}
		return (
			<div className="main">
				<Title text={"Daniel S. Abrahms"} />

				<Container className="columnBox">
					<Row>
						<Col xs={12} md={6} xl={4}>
							<Column
								boxes={colList.filter((a, i) => i % 3 === 0)}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<Column
								boxes={colList.filter((a, i) => i % 3 === 1)}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<Column
								boxes={colList.filter((a, i) => i % 3 === 2)}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
