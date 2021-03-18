import React, { Fragment, PureComponent } from 'react';
import { Space,Dropdown,Button, Menu  } from 'antd';
import { DownOutlined,UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';

class CDropdown extends PureComponent {
    constructor(props){
        super(props);
        this.state ={}
    }

     handleMenuClick(e, menu) {
        console.log('click', e, menu);
        this.props.history.push(menu.url)
      }

    render(){
        console.log(this.props)
        const MENU = (<Menu>
            { this.props.menus.map((menu, index) => 
                (<Menu.Item onClick={(ev) => this.handleMenuClick(ev, menu)} key={index} icon={<UserOutlined />}>
                    { menu.name }
                </Menu.Item>)
            )}
            </Menu>)
        return(
            <Fragment>
                <Space size="middle">
                    <Dropdown overlay={MENU}>
                    <Button>
                        { this.props.name } <DownOutlined />
                    </Button>
                    </Dropdown>
                </Space>
            </Fragment>
        )
    }
}

export default withRouter(CDropdown);