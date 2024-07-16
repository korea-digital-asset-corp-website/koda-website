import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import IndexPage from "src/components/page/IndexPage";

export default {
  title: "@Component/Component",
};

const _Header = () => <Header />;
_Header.story = {
  name: "Header",
};

const _Footer = () => <Footer />;
_Footer.story = {
  name: "Footer",
};
const _IndexPage = () => <IndexPage />;
_IndexPage.story = {
  name: "IndexPage",
};
