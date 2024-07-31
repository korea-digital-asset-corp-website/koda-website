import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import IndexPage from "src/components/page/IndexPage";

export default {
  title: "@Component/Component",
};

export const _Header = {
  render: () => <Header />,
  name: "Header",
};

export const _Footer = {
  render: () => <Footer />,
  name: "Footer",
};

export const _IndexPage = {
  render: () => <IndexPage />,
  name: "IndexPage",
};
