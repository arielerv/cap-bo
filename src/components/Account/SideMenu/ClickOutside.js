/* global document */
import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
    static propTypes = {
        onClickOutside: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired
    };

    constructor(props) {
        super(props);
        this.container = createRef();
        this.isTouch = false;
    }

    componentDidMount() {
        document.addEventListener('touchend', e => this.handleChange(e), true);
        document.addEventListener('click', e => this.handleChange(e), true);
    }

    componentWillUnmount() {
        document.removeEventListener('touchend', e => this.handleChange(e), true);
        document.removeEventListener('click', e => this.handleChange(e), true);
    }

    handleChange = e => {
        if (e.type === 'touchend') {
            this.isTouch = true;
        }
        if (e.type === 'click' && this.isTouch) {
            return;
        }
        const {onClickOutside} = this.props;
        const element = this.container.current;
        if (element && !element.contains(e.target)) {
            onClickOutside();
        }
    };

    render() {
        const {children, onClickOutside, ...props} = this.props;
        return (
            <div {...props} ref={this.container}>{children}</div>
        );
    }
}

export default ClickOutside;
