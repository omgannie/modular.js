import React from "react";
import PropTypes from "prop-types";

class Draggable extends React.Component {
   static propTypes = {
     children: PropTypes.node.isRequired
   };

   render() {
      return (
         <div onDragStart={}>{this.props.children}</div>
      );
   }
}

export default Draggable;
