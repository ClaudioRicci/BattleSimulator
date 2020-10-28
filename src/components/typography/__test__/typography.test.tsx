import React from "react";
import ReactDOM from "react-dom";
import {
  H1Tag,
  H1TagGreen,
  H1TagRed,
  H2Tag,
  H3Tag,
  H4Tag
} from "../../typography";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Typography Tests", () => {
  describe("H1Tag Tests", () => {
    it("H1 Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H1Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1 is primary colour (Navy Blue, #0000BD)", () => {
      const tree = renderer.create(<H1Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#00008D");
    });
  });

  describe("H1TagGreen Tests", () => {
    it("H1TagGreen renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H1TagGreen />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1TagGreen is green (#90EE90)", () => {
      const tree = renderer.create(<H1TagGreen />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#90EE90");
    });
  });

  describe("H1TagRed Tests", () => {
    it("H1TagRed renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H1TagRed />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1TagRed is red (#FB2020)", () => {
      const tree = renderer.create(<H1TagRed />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#FB2020");
    });
  });

  describe("H2Tag Tests", () => {
    it("H2Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H2Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1Tag is secondary colour (Neon Purple, #F900F1)", () => {
      const tree = renderer.create(<H2Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#F900F1");
    });
  });

  describe("H3Tag Tests", () => {
    it("H3Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H3Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H3Tag is bright colour (Bright Red, #FB2020)", () => {
      const tree = renderer.create(<H3Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#FB2020");
    });
  });

  describe("H4Tag Tests", () => {
    it("H4Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H4Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H4Tag is secondary colour (Neon Purple, #F900F1)", () => {
      const tree = renderer.create(<H4Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#F900F1");
    });
  });
});
