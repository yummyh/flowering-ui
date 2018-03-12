import React from 'react';
import ReactDOM from 'react-dom';
import {
    Drawer, Toast
} from '../../src/index.js';
import '../style/style.less'
const Component = React.Component;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisible: false,
        }
    }

    handleClick(value) {
        alert(1231231)
    }

    render() {

        return (
            <div className="example">
                <span className="btn" onClick={this.handleClick.bind(this, true)} >click here!</span>
                <Toast >
                    <p className="ctn" >this is a example!</p>
                </Toast>
            </div>
        )
    }
}


ReactDOM.render(<Main/>, document.querySelector('.main'));