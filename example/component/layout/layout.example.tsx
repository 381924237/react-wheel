import React from "react";
import Layout from "@/layout/layout";
import Header from "@/layout/header";
import Content from "@/layout/content";
import Footer from "@/layout/footer";
import Aside from "@/layout/aside";
import "./layout.example.scss";

export default () => {
  return (
    <div>
      <h2>例子1</h2>
      <Layout className="a">
        <Header className="b">header</Header>
        <Content className="c">content</Content>
        <Footer className="d">footer</Footer>
      </Layout>

      <h2>例子2</h2>
      <Layout className="a">
        <Header className="b">header</Header>
        <Layout>
          <Aside className="e">aside</Aside>
          <Content className="c">content</Content>
        </Layout>
        <Footer className="d">footer</Footer>
      </Layout>

      <h2>例子3</h2>
      <Layout className="a">
        <Header className="b">header</Header>
        <Layout>
          <Content className="c">content</Content>
          <Aside className="e">aside</Aside>
        </Layout>
        <Footer className="d">footer</Footer>
      </Layout>

      <h2>例子4</h2>
      <Layout className="a">
        <Aside className="e">aside</Aside>
        <Layout className="a">
          <Header className="b">header</Header>
          <Content className="c">content</Content>
          <Footer className="d">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
