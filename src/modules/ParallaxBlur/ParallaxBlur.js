import React from "react";
import PropTypes from "prop-types";

class ParallaxBlur extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: null,
      ticking: false,
      latestKnownScrollY: null
    };
    this.onScroll = this.onScroll.bind(this);
  };

  componentWillMount() {
    const {
        addEventListener,
        requestAnimationFrame,
        webkitRequestAnimationFrame,
        mozRequestAnimationFrame,
        setTimeout
    } = window;

    addEventListener("scroll", this.onScroll, false);
  }

  componentDidUpdate() {
  }

  onScroll = () => {
    this.setState({ latestKnownScrollY: window.scrollY });
    this.onTick();
  };

  onWindowResize = () => {
    this.setState({ windowHeight: window.height() });
  };

  onTick = () => {
    if (!this.state.ticking) {
       window.requestAnimationFrame(this.update);
       this.setState({ ticking: true });
    }
  };

  handleUpdate = () => {
    const currentScrollY = this.state.latestKnownScrollY;
    this.setState({ ticking: false });

    const slowScroll = currentScrollY/2;
    const blurScroll = currentScrollY*2;
    const opacityScroll = 1.4 - currentScrollY/400;

    if (currentScrollY > this.state.windowHeight) {

    } else {
    }
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxBlur;