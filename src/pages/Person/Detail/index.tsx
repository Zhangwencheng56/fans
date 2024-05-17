import { Avatar, NavBar } from "antd-mobile";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './style.scss'

const PersonDetail = () => {
  const location: any = useLocation();
  const detail = location?.state?.detail;

  useEffect(() => {
    // 调用接口获取人员详情
  }, []);

  const back = () => {};

  return (
    <div className="container_person_detail">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        成员列表
      </NavBar>
      <div className="that_person_detail">
        <Avatar src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"></Avatar>
        <h3>{detail?.name}</h3>
        <div className="that_detail">
          <div>星座：{}</div>
          <div>血型：{}</div>
          <div>身高：{}</div>
          <div>生日：{}</div>
          <div>出生地：{}</div>

          <div>哔哩哔哩：{}</div>
          <div>抖音：{}</div>
          <div>小红书：{}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
