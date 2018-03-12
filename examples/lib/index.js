import React from 'react';
import ReactDOM from 'react-dom';
import {
    Drawer
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
        this.setState(old => {
            old.popupVisible = value;
            return old;
        })
    }

    render() {

        return (
            <div className="example">
                <span className="btn" onClick={this.handleClick.bind(this, true)} >click here!</span>
                <Drawer style={{minHeight: '100%', width: '80%'}}
                        animation='slide'
                        maskAnimation={true}
                        changeVisible={this.handleClick.bind(this, false)}
                        visible={this.state.popupVisible} >
                        <p className="ctn" >this is a example!</p>
                </Drawer>
            </div>
        )
    }
}


ReactDOM.render(<Main/>, document.querySelector('.main'));