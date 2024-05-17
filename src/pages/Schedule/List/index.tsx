import { List, NavBar } from "antd-mobile";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const TypeEnum: any = {
  特典会: "tedian",
  直播: "zhibo",
  演出: "yanchu",
};

const ScheduleList = () => {
  const [schduleList, setSchedule] = useState<any>([]);
  const navigate: any = useNavigate();

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
    <div className="container_schedule_list">
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
            <List.Item
              key={index}
              onClick={() => {
                navigate("/schedule/detail", { state: { detail: item } });
              }}
            >
              <div className="that_time">{item?.time}</div>
              <div className="that_content_wraper">
                <div className={"item_type item_"+TypeEnum[item?.type]}>{item?.type}</div>
                <div className="item_detail">
                  <div>{item?.name}</div>
                  <div>{item?.parts}</div>
                </div>
              </div>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default ScheduleList;
