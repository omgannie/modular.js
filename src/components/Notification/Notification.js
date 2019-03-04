import React from "react";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";
import "./style.css";

class Notification extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        message: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    static defaultProps = {
        show: true
    };

    render() {
        const { show, message, onClose } = this.props;
        return (
            <div className={`${show ? "show" : "hide" } Notification`}>
                <span>{message}</span>
                <span className={"icon"}><Close onClick={onClose} /></span>
            </div>
        );
    }
}

export default Notification;