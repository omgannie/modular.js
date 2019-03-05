import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { HelpOutlined } from "@material-ui/icons";

class Tip extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    handleDismiss = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const { children, onClick } = this.props;
        if (this.state.show) {
            return (
                <div className={"Tip"}>
                    <div className={"title"}>Did you know? <HelpOutlined/></div>
                    <span>{children}</span>
                    <div className={"actions"}>
                        <button onClick={onClick}>Learn more</button>
                        <button onClick={this.handleDismiss}>Dismiss</button>
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default Tip;