import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class CustomTextEditForm extends React.Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onPublish: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  renderCustomEditButtons = () => {
     return (
       <div className={"ButtonGroup"}>
           <select className={"fonts"}>
               <option onClick={}>Arial</option>
           </select>
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