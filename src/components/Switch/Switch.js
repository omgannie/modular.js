import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class Switch extends React.Component {
  static propTypes = {
     defaultValue: PropTypes.bool,
     label: PropTypes.string.isRequired,
     displayPosition: PropTypes.oneOf(["left","right"]),
     onActive: PropTypes.func.isRequired
  };

  static defaultProps = {
     defaultValue: false,
     displayPosition: "left"
  };

  constructor(props) {
     super(props);
     this.state = {
        isActive: props.defaultValue
     };
  };

  componentDidUpdate(prevProps, prevState) {
      return this.state.isActive && this.props.onActive();
  }

    handleToggle = () => {
       this.setState({ isActive: !this.state.isActive });
    };

    render() {
       const { label, displayPosition } = this.props;

       return (
         <div>
           {displayPosition === "left" && (<span>{label}</span>)}
           <label className="switch" onClick={this.handleToggle}>
             <input type="checkbox" />
             <span className="slider round" />
           </label>
           {displayPosition === "right" && (<span>{label}</span>)}
         </div>
       )
    };
};

export default Switch;