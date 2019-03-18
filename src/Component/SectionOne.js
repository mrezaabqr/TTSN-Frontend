import React, {Component} from "react";
import {Row, Col, Card} from "antd";

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
                            {/*<Meta*/}
                            {/*title="Europe Street beat"*/}
                            {/*description="www.instagram.com"*/}
                            {/*/>*/}
                            <h2>
                                امنیت رو فدای سادگی نکنید
                            </h2>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24} className={"section-one-col-justify"}>
                        <Card
                            className={"section-one-col-card"}
                            hoverable
                        >
                            {/*<Meta*/}
                            {/*title="Europe Street beat"*/}
                            {/*description="www.instagram.com"*/}
                            {/*/>*/}
                            <h2>
                                به سادگی و زیبایی گزارش بگیرید
                            </h2>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={24} sm={24} xs={24} className={"section-one-col-justify"}>
                        <Card
                            className={"section-one-col-card"}
                            hoverable
                        >
                            {/*<Meta*/}
                            {/*title="Europe Street beat"*/}
                            {/*description="www.instagram.com"*/}
                            {/*/>*/}
                            <h2>
                                تیمی روی پروژه‌ها کار کنید
                            </h2>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SectionOne;