import React from "react";

class FilterableItem extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        isActive: false
     };
  };

  handleToggle = () => {
     this.setState({ isActive: !this.state.isActive });
  };

  render() {
     return (
        <label class="switch" onClick={this.handleToggle}>
           <input type="checkbox" />
           <span class="slider round"></span>
           <span> {this.props.children} </span>
        </label>
     );
  };
};

export default FilterableItem;