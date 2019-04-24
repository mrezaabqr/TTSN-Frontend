import React, {Component} from "react";
import {Row, Col, Button} from "antd";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            justify: "center"
        }
    }

    updateState = () => {
        if (window.innerWidth <= 1224) {
            this.setState({
                justify: "end"
            })
        } else {
            this.setState({
                justify: "center"
            })
        }
    };

    componentDidMount = () => {
        window.addEventListener("resize", this.updateState)
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateState)
    };

    redirect = () => {
        window.location.href = ("TTSN-html/test.html");
        console.log("heeeeleoo")
    };

    render() {
        return (
            <div className={"header-wrapper"}>
                <Row type="flex" justify={this.state.justify}>
                    <Col span={10}>
                        <div className={"header-content"}>
                            <h2>نرم افزار مدیریت پروژه آنلاین برای شرکت ها</h2>
                            <p>نرم افزار مدیریت پروژه آنلاین سیستمی امن و آسان برای مدیریت کار و پروژه‌هاست که بهره‌وری و بازدهی تیم شما رو
                                افزایش میده.</p>
                            <Button type="primary" size={"large"}
                                    onClick={this.redirect}
                                    className={"header-section-button"}
                                    style={{marginTop: "20px", backgroundColor: "#4555C6", borderColor: "#4555C6"}}>
                                
<a href="https://mrphenomenon.github.io/">! رایگان شروع کنید</a>
                            </Button>
                        </div>
                    </Col>
                    <Col span={6} className={"hide-xs"}>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header