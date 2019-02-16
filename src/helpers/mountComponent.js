import React from "react";
import { mount } from "enzyme";

const mountComponent = (Component) => (props) => mount(<Component {...props} />);

export default mountComponent;