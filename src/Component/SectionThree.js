import React, {Component} from "react";
import {Button, Card, Row, Col} from "antd";
import backimg from "../Assets/Image/Group.png";
import heartIcon from "../Assets/Image/Heart-icon.png";

class SectionThree extends Component {
    render() {
        return (
            <div className={"section-three-wrapper text-center"}>
                <div className={"d-flex flex-column align-item-items justify-content-center"}>
                    <div className={"section-three d-flex flex-column align-item-items justify-content-center"}>
                        <h1 className={"mt-17"} style={{color: "#3b3b3b"}}>با نرم افزار مدیریت پروژه کارها رو از اول تا آخر پیگیری
                            کنید</h1>
                        <h3 className={"text-center"} style={{color: "#3b4755"}}>نرم افزار مدیریت پروژه یک نرم افزار برای ارتباط و
                            همکاری آنلاینه که مدیریت کارها و پروژه‌ها، مدیریت تیم،
                            زمان‌های
                            کاری و چت گروهی رو در یک جا ترکیب کرده تا شما بتونین پیشرفت کار رو مشاهده کنین و تیمتون
                            بتونه با
                            خیال راحت و به سادگی به کارش برسه و خروجی بیشتری داشته باشه.</h3>
                        <Button type={"primary"} size={"large"} className={"mt-14 section-three-button"}>
                            اطلاعات بیشتر در مورد نرم افزار مدیریت پروژه
                        </Button>
                        <img src={backimg} className={"mt-17"}>

                        </img>
                        <img src={heartIcon} className={"mt-13"}>

                        </img>
                        <h2 className={"text-center mt-13"}>
                            تیم ها با نرم افزار مدیریت پروژه بازدهی بالاتری دارند
                        </h2>

                    </div>
                    <Row type="flex" justify="center">
                        <Col xl={4} lg={4} md={24} sm={24} xs={24}
                             className={"section-three-col-justify section-three-col"}>
                            <a className={"section-three-img-link-one align-item-items justify-content-center"}>
                                <img className={"section-three-icon"}
                                     src={"https://taskulu.com/wp-content/uploads/2016/02/hoorakhsh_studio.png"}/>
                            </a>
                        </Col>
                        <Col xl={4} lg={4} md={24} sm={24} xs={24}
                             className={"section-three-col-justify section-three-col"}>
                            <a className={"section-three-img-link-two align-item-items justify-content-center"}>
                                <img className={"section-three-icon"}
                                     src={"https://taskulu.com/wp-content/uploads/2016/02/behind_the_stone.png"}/>
                            </a>
                        </Col>
                        <Col xl={4} lg={4} md={24} sm={24} xs={24}
                             className={"section-three-col-justify section-three-col"}>
                            <a className={"section-three-img-link-three align-item-items justify-content-center"}>
                                <img className={"section-three-icon"}
                                     src={"https://taskulu.com/wp-content/uploads/2016/02/a_network.png"}/>
                            </a>
                        </Col>
                        <Col xl={4} lg={4} md={24} sm={24} xs={24}
                             className={"section-three-col-justify section-three-col"}>
                            <a className={"section-three-img-link-four align-item-items justify-content-center"}>
                                <img className={"section-three-icon"}
                                     src={"https://taskulu.com/wp-content/uploads/2016/02/faranesh.png"}/>
                            </a>
                        </Col>
                    </Row>
                    <p className={"mt-10 section-three-title-improvement"} style={{width: "100%"}}>
                        سازمان‌ها و شرکت‌هایی که با استفاده از نرم افزار مدیریت پروژه خروجی تیم‌هاشون رو افزایش دادن
                    </p>
                </div>

            </div>
        )
    }
}

export default SectionThree