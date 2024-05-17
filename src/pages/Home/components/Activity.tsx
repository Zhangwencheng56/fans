import React, { Fragment, useEffect, useState } from "react";
import { List } from "antd-mobile";
import ComponentEmpty from "./Empty";

const StatusEnum: any = {
  on: "当前进行中",
  waiting: "未开始",
};

export default function ComponentActivity() {
  const [activityList, setActivityList] = useState<any>({});
  const [showList, setShowList] = useState(true);
  const [queueList, setQueueList] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  // 调用后端接口获取特典会活动
  useEffect(() => {
    setActivityList({
      on: [
        {
          key: "1",
          img: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
          name: "starting fest4.0",
          status: "on",
          location: "人民广场",
        },
        {
          key: "3",
          img: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
          name: "某特典会",
          status: "on",
          location: "人民广场",
        },
        {
          key: "4",
          img: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
          name: "某特典会",
          status: "on",
          location: "人民广场",
        },
        {
          key: "5",
          img: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
          name: "某直播互动",
          status: "on",
          location: "人民广场",
        },
      ],
      waiting: [
        {
          key: "2",
          img: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
          name: "现场演出",
          status: "waiting",
          time: "2024-06-22",
          location: "人民广场",
        },
      ],
    });
    setLoading(false);

    // setActivityList([]);
  }, []);

  const back = () => {};

  const toJoin = () => {
    // 调用接口获取排队列表
    setQueueList([
      {
        name: "MTL特典会",
        perNum: "11",
      },
      {
        name: "唱歌直播间",
        perNum: "22",
      },
      {
        name: "MTL特典会",
        perNum: "11",
      },
      {
        name: "舞台表演",
        perNum: "12",
      },
      {
        name: "跳舞直播间",
        perNum: "44",
      },
    ]);
    setShowList(false);
  };

  const renderQueueList = () => {
    console.log(showList, "--showList");

    if (showList) {
      console.log("--");

      return (
        <div className="that_activity_list">
          {Object.entries(activityList).map(
            ([status, record]: any, index: any) => {
              return (
                <Fragment key={index}>
                  <div className="item_status">{StatusEnum[status]}</div>
                  {record?.map((item: any, index: any) => {
                    if (status === "on") {
                      return (
                        <li key={index} className="item_activity_on">
                          <div className="item_img_wraper">
                            <img
                              src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                              className={`${item?.isRX ? "img_blur" : ""}`}
                            />
                          </div>
                          <div className="item_content">
                            <div className="item_msg">
                              <h3>{item?.name}</h3>
                              <div>{item?.location}</div>
                            </div>
                            <div className="item_join" onClick={() => toJoin()}>
                              <div> 去参加</div>
                            </div>
                          </div>
                        </li>
                      );
                    } else if (status === "waiting")
                      return (
                        <li key={index} className="item_activity_waiting">
                          <h3>{item?.name}</h3>
                          <div>时间：{item?.time}</div>
                          <div>地点：{item?.location}</div>
                        </li>
                      );
                  })}
                </Fragment>
              );
            }
          )}
        </div>
      );
    }
    return (
      <div className="that_queue_list">
        <List>
          {queueList.map((item: any, index: any) => {
            return (
              <List.Item key={index}>
                <div className="item_pic">{item?.time}</div>
                <div className="item_content_wraper">
                  <div>{item?.name}</div>
                  <div className="item_queue">
                    <span>排队人数：</span>
                    <span>11人</span>
                  </div>
                </div>
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  };

  const renderView = () => {
    if (!loading && !!Object.keys(activityList).length) {
      console.log("----");

      renderQueueList();
    }

    if (!loading && !Object.keys(activityList).length) {
      return <ComponentEmpty />;
    }

    return null;
  };

  return renderView();
}
