import React, {Component} from 'react';
import {Button} from "antd"

class SectionTwo extends Component {
    render() {
        return (
            <div className={"section-two-wrapper d-flex justify-content-center align-item-items"}>
                <div className={"d-flex justify-content-center "} style={{alignItems:"end"}}>
                    <Button type={"primary"} size={"large"} className={"section-two-button mr-10"}>
                        بیشتر بدونین
                    </Button>

                    <h1 className={"text-white"}>
                        نرم افزار مدیریت پروژه مدیریت کارها رو برای کسب و کارهای بزرگ آسون میکنه
                    </h1>

                </div>
            </div>
        )
    }
}

export default SectionTwo;