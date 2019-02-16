import React from "react";
import PropTypes from "prop-types";

function withAnimation(Component, animationProps) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <Component {...this.props} />;
        }
    }
}