/* eslint-disable @typescript-eslint/no-empty-function */
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "jest-enzyme";

configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
