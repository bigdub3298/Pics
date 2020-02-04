import React from "react";
import { mount } from "enzyme";
import ImageCard from "../ImageCard";

let wrapper;

beforeEach(() => {
  const image = {
    description: "A man drinking a coffee.",
    urls: {
      raw: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
      full: "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
      regular:
        "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
      small:
        "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
      thumb:
        "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
    }
  };
  wrapper = mount(<ImageCard image={image} />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("ImageCard component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("has initial span of 0", () => {
    expect(wrapper.state("spans")).toBe(0);
  });
});

describe("the img", () => {
  it("has the correct alt", () => {
    expect(wrapper.find("img").prop("alt")).toBe("A man drinking a coffee.");
  });

  it("has the correct src", () => {
    expect(wrapper.find("img").prop("src")).toBe(
      "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515"
    );
  });
});
