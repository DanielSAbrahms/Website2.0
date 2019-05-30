import React from "react";
import Box from "./Box";
import "./styles/column.css";

export default class Column extends React.Component {
    render() {
        return (
            <div className="column">
                {this.props.boxes.map((item, index) => (
                    <Box boxTitle={item.title} boxContent={item.content} />
                ))}
            </div>
        );
    }
}
