import React from "react";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";
import "./style.css";

const Notification = ({ show, message, onClose }) => {
    return (
        <div className={`${show ? "show" : "hide" } Notification`}>
            <span>{message}</span>
            <span className={"icon"}><Close onClick={onClose} /></span>
        </div>
    );
};

Notification.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

Notification.defaultProps = {
    show: true
};

export default Notification;