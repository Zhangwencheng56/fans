import React from "react";
import { NavBar, Swiper, Tabs } from "antd-mobile";
import HomePage from "./components/HomePage";
import "./style.scss";

const Home = () => {
  const back = () => {};

  return (
    <div className="container_home">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        某某主页名称
      </NavBar>

      <Tabs>
        <Tabs.Tab
          key="1"
          title={
            <>
              <i className="iconfont">&#xe613;</i>
              <div>主页</div>
            </>
          }
        >
          <HomePage />
        </Tabs.Tab>
        <Tabs.Tab
          key="2"
          title={
            <>
              <i className="iconfont">&#xe67b;</i>
              <div>商城</div>
            </>
          }
        ></Tabs.Tab>
        <Tabs.Tab
          key="3"
          title={
            <>
              <i className="iconfont">&#xe6da;</i>
              <div>票夹</div>
            </>
          }
        ></Tabs.Tab>
        <Tabs.Tab
          key="4"
          title={
            <>
              <i className="iconfont">&#xe619;</i>
              <div>我的</div>
            </>
          }
        ></Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Home;
