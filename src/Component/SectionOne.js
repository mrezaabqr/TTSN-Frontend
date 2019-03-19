import React, {Component} from "react";
import {Row, Col, Card} from "antd";
import securityIcon from "../Assets/Image/phishing.png";
import reportIcon from "../Assets/Image/clipboard.png";
import teamworkIcon from "../Assets/Image/teamwork.png";

const {Meta} = Card;

class SectionOne extends Component {
    render() {
        return (
            <div className={"section-one-wrapper"}>
                <Row type="flex" justify="center">
                    <Col xl={6} lg={6} md={24} sm={24} xs={24} className={"section-one-col-justify"}>
                        <Card
                            className={"section-one-col-card"}
                            hoverable
                        >
                            <div className={"d-flex justify-content-center flex-column align-item-items"}>
                                <div className={"section-one-icon d-flex justify-content-center"}>
                                    <img src={securityIcon}/>
                                </div>
                                <h2 className={"mt-6"}>
                                    امنیت رو فدای سادگی نکنید
                                </h2>
                                <h5 className={"text-center"} style={{color: "#3b4755"}}>
                                    با روش رمزنگاری استاندارد، دیتاسنترهایی امن در آلمان و نسخه‌های پشتیان روزانه،
                                    تسکولو
                                    امنیت و سادگی رو با هم داره.
                                </h5>
                            </div>

                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24} className={"section-one-col-justify"}>
                        <Card
                            className={"section-one-col-card"}
                            hoverable
                        >
                            <div className={"d-flex justify-content-center flex-column align-item-items"}>
                                <div className={"section-one-icon d-flex justify-content-center"}>
                                    <img src={reportIcon}/>
                                </div>
                                <h2 className={"mt-6"}>
                                    به سادگی و زیبایی گزارش بگیرید
                                </h2>
                                <h5 className={"text-center"} style={{color: "#3b4755"}}>
                                    شرکت‌ها حجم بزرگی از داده‌ها روی تسکولو در مورد نحوه کار و همکاری تیم‌هاشون دارن. با
                                    تحلیل‌گر تسکولو، داده‌هاتون رو به تصمیم تبدیل کنین.
                                </h5>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24} className={"section-one-col-justify"}>
                        <Card
                            className={"section-one-col-card"}
                            hoverable
                        >
                            <div className={"d-flex justify-content-center flex-column align-item-items"}>
                                <div className={"section-one-icon d-flex justify-content-center"}>
                                    <img src={teamworkIcon}/>
                                </div>
                                <h2 className={"mt-6"}>
                                    تیمی روی پروژه‌ها کار کنید
                                </h2>
                                <h5 className={"text-center"} style={{color: "#3b4755"}}>
                                    کار یه فعالیت تیمیه، با تسکولو تیمتون رو دور هم جمع کنین و همکاری روی پروژه‌ها،
                                    وظایف و فایل‌ها رو شروع کنین.
                                </h5>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SectionOne;