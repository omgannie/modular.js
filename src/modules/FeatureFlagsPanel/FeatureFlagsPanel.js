import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFeatureFlag, fetchFeatureFlags, toggleFeatureFlag } from "../../actions/featureFlags";
import { Switch } from "../../components";

class FeatureFlagsPanel extends React.Component {
  static propTypes = {
    featureFlags: PropTypes.shape({}),
    onAdd: PropTypes.func.isRequired,
    onFetch: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    user: PropTypes.shape({}).isRequired
  };

  static defaultProps = {
    featureFlags: {}
  };

  componentDidMount() {
    this.props.onFetch();
  };

  renderFlag = flagProps => {
    return (
        <Switch
            label={flagProps.label}
            onActive={() => this.props.onToggle(flagProps)}
        />
    );
  };

  render() {
    return (
      <div>
        <h1>Feature Flags</h1>
        <div id={"ff-main"}>

        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    onFetch: () => fetchFeatureFlags(dispatch, user),
    onToggle: (flag) => toggleFeatureFlag(dispatch, flag),
    onAdd: (newFlagData) => addFeatureFlag(dispatch, newFlagData)
  }
};

const mapStateToProps = (state) => {
  return {
      ...state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureFlagsPanel);
