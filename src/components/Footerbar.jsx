import React, {
    PureComponent, Fragment
} from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class Footerbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Footer theme={'dark'} style={{ textAlign: 'center', backgroundColor: '#e9fce9' }}>Naam Thamizhar Sevai Maiyyam ©2021 Created by <a href="https://devharipragaz007.github.io/" rel="noopener noreferrer" target="_blank"> Hariprakash Babu</a></Footer>
            </Fragment>
        )
    }
}

export default Footerbar;