import React from "react";
import PropTypes from "prop-types";

class Draggable extends React.Component {
   static propTypes = {
     children: PropTypes.node.isRequired
   };

   handleDragStart() {
      console.log("I'm dragging!");
   }

   handleDragEnd() {
      console.log("I stopped dragging!");
   }

   render() {
      return (
         <div
             draggable={true}
             onDragStart={this.handleDragStart}
             onDragEnd={this.handleDragEnd}
         >
             {this.props.children}
         </div>
      );
   }
}

export default Draggable;
