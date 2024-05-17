import { Avatar, Image, List, NavBar } from "antd-mobile";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";

const initPerson: any = [
  {
    id: "1",
    name: "娜娜子",
    status: "isTiming",
    avator: "",
  },
  {
    id: "2",
    name: "娜娜子",
    status: "free",
    avator: "",
  },
  {
    id: "2",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "2",
    name: "娜娜子",
    status: "free",
    avator: "",
  },
  {
    id: "3",
    name: "娜娜子",
    status: "isTiming",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
  {
    id: "4",
    name: "娜娜子",
    status: "fail",
    avator: "",
  },
];

const ScheduleDetail = () => {
  const location: any = useLocation();
  const detail = location?.state?.detail;

  useEffect(() => {}, []);

  const back = () => {};

  return (
    <div className="container_schedule_detail">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        活动详情
      </NavBar>
      <div className="that_schedule_detail">
        <h3>{detail?.name}</h3>
        <img
          src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
          alt=""
        />
        <List>
          {initPerson.map((item: any, index: any) => {
            return (
              <List.Item
                key={index}
                prefix={
                  <Image
                    src="../../../asset/imgs/logo.jpeg"
                    style={{ borderRadius: "50%" }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
              >
                {item?.name}
              </List.Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default ScheduleDetail;
