import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttr, checkProps } from "../test/testUtils";

const mockSetCurrentGuess = jest.fn();

// Hack for hooks
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const defaultProps = { secretWord: "", success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe("render", () => {
  describe("Success is true", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("Submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("Success is false", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("input box shows", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("Submit button shows", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { secretWord: "any" };
  checkProps(Input, expectedProps);
});

describe("State controlled input field", () => {
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
