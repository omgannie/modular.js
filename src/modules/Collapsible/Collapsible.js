import React from "react";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import PropTypes from "prop-types";
import './style.css';

class Collapsible extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    width: PropTypes.string
  };

  static defaultProps = {
    width: "40%"
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { width, title, children } = this.props;
    return (
      <div className={"Collapsible"} style={{ width }}>
        <div
            className={"title"}
            onClick={this.handleToggle}
        >
            <span>{title}</span>

            <span>{isOpen ? <ExpandLess /> : <ExpandMore />}</span>
        </div>
        <div className={`${isOpen ? "expand" : "collapse"} content`}>
          {children}
        </div>
      </div>
    );
  };
}

export default Collapsible;