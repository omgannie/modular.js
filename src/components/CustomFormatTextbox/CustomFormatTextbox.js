import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class CustomFormatTextbox extends React.Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onPublish: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  renderCustomEditButtons = () => {
     return (
       <div className={"ButtonGroup"}>
           <div className={"fontStyle"}></div>
           <div className={"paragraphStyle"}></div>
           <div className={"typeStyle"}></div>
       </div>
     )
  }

  render() {
   return (
       <div
           id={shortid.generate()}
           className={"CustomTextEditForm"}
       >
           {this.renderCustomEditButtons()}
       </div>
   );
  }
}

export default CustomFormatTextbox;