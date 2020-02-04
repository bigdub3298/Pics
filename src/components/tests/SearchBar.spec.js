import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../SearchBar";

let wrapper;

beforeEach(() => (wrapper = shallow(<SearchBar />)));

describe("SearchBar components", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("the text input", () => {
  beforeEach(() => {
    wrapper.find("#search-term").simulate("change", {
      target: { value: "money" }
    });

    wrapper.update();
  });

  it("can be typed in", () => {
    expect(wrapper.find("#search-term").prop("value")).toBe("money");
  });

  it("clears on form submit", () => {
    wrapper.setProps({ onSubmit: () => null });
    wrapper.find("form").simulate("submit", { preventDefault: () => null });
    wrapper.update();
    expect(wrapper.find("#search-term").prop("value")).toBe("");
  });
});
