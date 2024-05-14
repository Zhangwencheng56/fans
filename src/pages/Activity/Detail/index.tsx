import React from "react";
import { Avatar, Image, List, NavBar } from "antd-mobile";
import { useNavigate } from "react-router";
import "./style.scss";

const ActivityDeatil = () => {
  const statusEnum: any = {
    isTiming: "正在计时",
    free: "空闲",
    fail: "超时",
  };
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
  const navigate: any = useNavigate();
  const back = () => {};
  return (
    // <div className="container_activity_detail">
    //   <NavBar
    //     style={{
    //       "--height": "60px",
    //       "--border-bottom": "1px #eee solid",
    //     }}
    //     onBack={back}
    //   >
    //     活动详情
    //   </NavBar>
    //   <ul className="detail_wraper">
    //     <h2>粉丝见面会</h2>
    //     <h3>参与成员</h3>
    //     {initPerson.map((item: any, index: any) => {
    //       return (
    //         <li
    //           key={index}
    //           onClick={() => {
    //             navigate("/activity/choose", { state: { detail: item } });
    //           }}
    //         >
    //           <Avatar
    //             src="../../../asset/imgs/logo.jpeg"
    //             style={{ "--size": "64px" }}
    //           />
    //           <div className="that_content">
    //             <div className="item_left">
    //               <h3>{item?.name}</h3>
    //               <div className={item?.status === "fail" ? "status_fail" : ""}>
    //                 {statusEnum[item?.status]}
    //               </div>
    //             </div>
    //             <div>排队11人</div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
    <div className="container_activity_detail">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        活动详情
      </NavBar>
      <div className="that_detail_wraper">
        <h3>粉丝见面会</h3>
        <h4>参与成员</h4>
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
                    width={50}
                    height={50}
                  />
                }
                extra="排队人数11人"
                description={statusEnum[item?.status]}
                className={item?.status === "fail" ? "status_fail" : ""}
                onClick={() => {
                  navigate("/activity/choose", { state: { detail: item } });
                }}
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

export default ActivityDeatil;
