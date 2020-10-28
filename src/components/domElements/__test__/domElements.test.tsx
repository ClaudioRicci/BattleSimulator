import React from "react";
import ReactDOM from "react-dom";
import { BoardSurround, PlayerSurround, ActionButton } from "../index";
import { colors, fonts, align, deviceSizes } from "../../../themeVariables";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Dom Element Tests", () => {
  describe("BoardSurround Tests", () => {
    it("BoardSurround renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BoardSurround />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("BoardSurround to be 60rem wide by default", () => {
      const tree = renderer.create(<BoardSurround />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("width", "60rem");
    });
  });
  describe("ActionButton Tests", () => {
    it("ActionButton renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<ActionButton />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("ActionButton should have pointer to denote it can be pressed", () => {
      const tree = renderer.create(<ActionButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("cursor", "pointer");
    });

    test("ActionButton should turn orange (#f9b600) when hovered", () => {
      const tree = renderer.create(<ActionButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", `${colors.orange}`, {
        modifier: ":hover"
      });
    });

    test("ActionButton should be smaller for Mobile (Device Width 768px or smaller)", () => {
      const tree = renderer.create(<ActionButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("width", "6.4rem", {
        media: `(max-width: ${deviceSizes.mobile})`
      });
    });
  });

  describe("Date Tests", () => {
    it("Date renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<PlayerSurround />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("Date is secondary colour (#5D5D5D - Dark Grey)", () => {
      const tree = renderer.create(<PlayerSurround />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`color, ${colors.secondary}`);
    });
  });
});
