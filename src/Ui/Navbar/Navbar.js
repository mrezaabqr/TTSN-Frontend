import React, {Component} from "react";
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "home",
            prevScrollPos: 200,
            currentClassName: "no-background"
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    };

    handleScroll = () => {
        const {prevScrollPos} = this.state;
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos < currentScrollPos) {
            this.setState({
                currentClassName: "have-background"
            });
            console.log("have")
        } else {
            this.setState({
                currentClassName: "no-background"
            });
            console.log("no")
        }
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll)
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll)
    };

    render() {
        return (
            <div className={"navbar-wrapper " + this.state.currentClassName}>
                <Menu
                    selectable={false}
                    className={"navbar-self"}
                    mode="horizontal"
                >
                    <Menu.Item>
                        نرم افزار مدیریت پروژه
                    </Menu.Item>

                </Menu>
                <Menu
                    className={"navbar-self"}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        خانه
                    </Menu.Item>
                    <Menu.Item key="pricing">
                        قیمت ها
                    </Menu.Item>
                    <Menu.Item key="project">
                        امکانات
                    </Menu.Item>
                    <Menu.Item key="about">
                        درباره ما
                    </Menu.Item>
                </Menu>
                <Menu
                    className={"navbar-self-right"}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item>
                        <Icon type="login" style={{fontSize: "22px"}}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="search" style={{fontSize: "22px"}}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="github" style={{fontSize: "22px"}}/>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar