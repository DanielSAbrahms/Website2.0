import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

class Column extends React.Component {
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

class Box extends React.Component {
    render() {
        function showInfo(e) {
            e.preventDefault();
        }
        return (
            <div className="box">
                <div className="boxTitle">
                    <div className="boxTitleText">
                        <h3>{this.props.boxTitle}</h3>
                    </div>
                    <div className="boxTitleInfo" onClick={showInfo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="25px"
                            width="25px"
                            viewBox="0 0 25 25"
                            fill="white"
                        >
                            <g>
                                <path
                                    d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
		S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
		c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
		l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
		c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
		c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
		c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
		c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
		c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
		 M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
		c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
		c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="boxInfoContent">
                    {this.props.boxInfoContent}
                </div>
                <div className="boxContent">{this.props.boxContent}</div>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <div className="titleText">
                    <h1>{this.props.text}</h1>
                </div>
                <div className="titleLinks">
                    <div className="titleLinkItem">
                        <a
                            href="https://www.linkedin.com/in/daniel-abrahms/"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35px"
                                height="35px"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                    <div className="titleLinkItem">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35px"
                            height="35px"
                            viewBox="0 0 438.549 438.549"
                            fill="white"
                        >
                            <g>
                                <path
                                    d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        var colList = [];
        var text1 =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec rutrum massa. Duis mollis pellentesque dolor, eget vestibulum magna sodales sed. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti. Aenean cursus imperdiet elementum. Nunc ultrices ullamcorper eleifend. Nunc posuere odio vel tincidunt tristique.";
        var text2 =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec rutrum massa. Duis mollis pellentesque dolor, eget vestibulum magna sodales sed. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti. Aenean cursus imperdiet elementum.";
        var text3 =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, mauris eget dictum pretium, eros arcu tincidunt justo, non mattis est ex et erat. Morbi bibendum laoreet diam, ut consequat odio scelerisque eu. Suspendisse justo purus, lobortis eu arcu sed, tincidunt condimentum lorem. Cras et neque rhoncus, porta leo sed, venenatis diam. Duis tortor ante, imperdiet ac cursus pellentesque, pharetra a nisl. Ut eu accumsan nisl, id posuere sapien. Sed in iaculis enim. Phasellus turpis tellus, pellentesque eget dolor quis, finibus egestas dui. Suspendisse potenti.";
        const boxCollection = [
            { title: "Box1", content: <p>{text1}</p> },
            { title: "Box2", content: <p>{text2}</p> },
            { title: "Box3", content: <p>{text3}</p> },
            { title: "Box4", content: <p>{text1}</p> },
            { title: "Box5", content: <p>{text1}</p> },
            { title: "Box6", content: <p>{text2}</p> },
            { title: "Box7", content: <p>{text3}</p> },
            { title: "Box8", content: <p>{text3}</p> }
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

// ========================================

ReactDOM.render(<Main />, document.getElementById("root"));
