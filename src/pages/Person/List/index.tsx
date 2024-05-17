import React from "react";
import { Avatar, NavBar } from "antd-mobile";
import { useNavigate } from "react-router";
import "./style.scss";

const PersonList = () => {
  const initPerson: any = [
    {
      id: "1",
      name: "娜娜子",
      avator: "",
    },
    {
      id: "2",
      name: "娜娜子",
      avator: "",
    },
    {
      id: "2",
      name: "娜娜子",
      avator: "",
    },
    {
      id: "2",
      name: "娜娜子",
      avator: "",
    },
    {
      id: "3",
      name: "娜娜子",
      avator: "",
    },
    {
      id: "4",
      name: "娜娜子",
      avator: "",
    },
  ];
  const navigate: any = useNavigate();
  const back = () => {};
  return (
    <div className="container_person_list">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        成员列表
      </NavBar>
      <ul className="detail_wraper">
        {initPerson.map((item: any, index: any) => {
          return (
            <li
              key={index}
              onClick={() => {
                navigate("/person/detail", { state: { detail: item } });
              }}
            >
              <Avatar
                src="../../../asset/imgs/logo.jpeg"
                style={{ "--size": "64px" }}
              />
              <h3>{item?.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonList;
