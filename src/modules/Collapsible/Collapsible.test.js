import React from "react";
import Collapsible from "./Collapsible";
import mountComponent from "../../helpers/mountComponent";

describe("Collapsible", () => {
  let component, defaultProps;

  beforeEach(() => {
     defaultProps = { title: "List Title", items: ["boop", "boop"] };
     component = mountComponent(Collapsible)(defaultProps);
  });

  it("renders", () => {
     expect(component.find(Collapsible).length).toBe(1);
  });

  it("handles title as trigger element", () => {
     expect(component.find)
  });

  it("handles children as collapsible list items", () => {

  });
});