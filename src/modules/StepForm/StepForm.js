import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";

class StepForm extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    currentStep: PropTypes.number
  };

  static defaultProps = {
    currentStep: null
  };

  componentWillMount() {

  }

  renderStepNav = () => {
    return (
      <nav className={"nav"}>
         {this.props.steps}
      </nav>
    );
  };

  render() {
    const { steps } = this.props;
    return (
      <main className={"StepForm"}>
        {this.renderStepNav()}
        {steps}
      </main>
    );
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);