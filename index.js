import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberFlip extends Component {

    render() {

        var _style = Object.assign({
            overflow: 'hidden'
        }, {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            lineHeight: `${this.props.height}px`,
        });

        let numberStyle = Object.assign({
            transform: `translateY(${-this.props.number * this.props.height}px)`,
            transitionDuration: this.props.duration + 'ms',
            transitionDelay: this.props.delay + 'ms',
            transitionTimingFunction: this.props.timingFunction
        }, _style, this.props.style)

        let numbers = [];

        for (let i=0; i<10;i++) {
            numbers.push(<div key={i} style={ numberStyle }>{i}</div>);
        }

        return (
            <div className="App">
                    <div className="numeric-wrapper" style={ _style } >{ numbers }</div>
            </div>
        );
    }
}

App.defaultProps = {
    number: 0,
    height: 32,
    width: 32,
    duration: 250,
    delay: 0,
    style: {},
    timingFunction: 'linear'
};

App.propTypes = {
    number: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,0]),
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    style: PropTypes.object,
    timingFunction: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])
}

export default NumberFlip;
