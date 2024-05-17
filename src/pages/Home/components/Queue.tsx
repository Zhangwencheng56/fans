import { List, NavBar } from "antd-mobile";
import React, { useEffect, useState } from "react";

export default function Queue() {
  const [schduleList, setSchedule] = useState<any>([]);

  useEffect(() => {
    // 调用接口获取活动日程列表
    setSchedule([
      {
        time: "2024-05-13",
        parts: "全员",
        name: "MTL特典会",
        type: "特典会",
      },
      {
        time: "2024-06-23",
        parts: "全员",
        name: "唱歌直播间",
        type: "直播",
      },
      {
        time: "2024-05-23",
        parts: "全员",
        name: "MTL特典会",
        type: "特典会",
      },
      {
        time: "2024-05-30",
        parts: "妞妞",
        name: "舞台表演",
        type: "演出",
      },
      {
        time: "2024-05-24",
        parts: "嘤嘤子",
        name: "跳舞直播间",
        type: "直播",
      },
    ]);
  }, []);
  const back = () => {};

  return (
    <div className="that_queue_list">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        活动日程
      </NavBar>
      <List>
        {schduleList.map((item: any, index: any) => {
          return (
            <List.Item key={index}>
              <div className="item_pic">{item?.time}</div>
              <div className="item_content_wraper">
                <div>娜娜子</div>
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
}
