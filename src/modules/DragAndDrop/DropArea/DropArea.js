import React from "react";
import PropTypes from "prop-types";

class DropArea extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  handleDrop() {

  }

  handleDragOver() {

  }

  render() {
    return (
        <div
            onDrop={this.handleDrop}
            onDragOver={this.handleDragOver}
        >
            {this.props.children}
        </div>
    );
  }
}

export default DropArea;
