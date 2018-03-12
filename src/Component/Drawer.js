import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../style/drawer.less';
export default class Drawer extends React.Component {

    componentDidMount() {
        const { visible } = this.props
        visible && document.body.classList.add('drawer-open');
    }

    // 关闭浮层
    handleModalClicked(tag, value) {
        const { changeVisible } = this.props
        document.body.classList.remove('drawer-open');
        changeVisible && changeVisible(tag, value);
    }

    render() {
        const { style, visible, maskStyle, maskAnimation, animation, children } = this.props;

        const wrap_className = classnames('drawer-wrap', {
            ['drawer-show']: visible,
            ['drawer-hide']: !visible,
            ['drawer-mask-fadeIn']: visible && maskAnimation
        });

        const ctn_className = classnames('drawer-content ', {
            [`drawer-ctn-${animation}`]: visible
        });


        return (
            <div className={wrap_className} style={maskStyle} onClick={this.handleModalClicked.bind(this)}>
                <div className={ctn_className} style={visible ? style : { width: '0%' }} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }
}

Drawer.defaultProps = {
    visible: false, //是否关闭窗口
    maskAnimation: false,
    animation: 'none' //slide fade none
}

Drawer.propTypes = {
    style: PropTypes.object,
    visible: PropTypes.bool,
    maskStyle: PropTypes.object,
    maskAnimation: PropTypes.bool,
    animation: PropTypes.oneOf(['slide', 'fade', 'none']),
    changeVisible: PropTypes.func
}
