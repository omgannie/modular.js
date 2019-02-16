import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilterableItem from "./FilterableItem";

class FilterableList extends React.Component {
  static propTypes = {
    applyFilters: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    resetFilters: PropTypes.func.isRequired
  };

  render() {
    return (<div>{this.props.items.map(item => <FilterableItem {...item} />)}</div>);
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    applyFilters: () => {},
    resetFilters: () => {}
  }
};

export default connect(null, mapDispatchToProps)(FilterableList);