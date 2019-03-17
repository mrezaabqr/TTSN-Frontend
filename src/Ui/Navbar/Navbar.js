import React, {Component} from "react";
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "home"
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    };

    render() {
        return (
            <div className={"navbar-wrapper"}>
                <Menu
                    selectable={false}
                    className={"navbar-self"}
                    mode="horizontal"
                >
                    <Menu.Item>
                        Taskulu
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