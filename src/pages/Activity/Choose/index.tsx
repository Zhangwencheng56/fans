import React, { useState } from "react";
import { Avatar, NavBar, Modal, Input, Button, Toast } from "antd-mobile";
import { useLocation } from "react-router-dom";
import "./styles.scss";

export default function Choose() {
  const [number, setNumber] = useState("");
  const [visible, setVisible] = useState(false);
  const location: any = useLocation();
  const detail = location?.state?.detail;

  const back = () => {};

  const handleInput = (value: any) => {
    setNumber(value);
  };

  const handleSubmit = () => {
    console.log(number, "-------");

    if (!number) {
      Toast.show({ content: "请输入张数" });
      return;
    }
    setVisible(false);
    setNumber("");
  };

  return (
    <div className="container_activity_choose">
      <div>
        <NavBar
          style={{
            "--height": "60px",
            "--border-bottom": "1px #eee solid",
          }}
          onBack={back}
        >
          活动详情
        </NavBar>
        <div className="that_header">
          <Avatar src={detail?.avatar}></Avatar>
          <div className="item_name">{detail?.name}</div>
        </div>
      </div>

      <ul className="that_footer">
        <li>使用1张券</li>
        <li>使用2张券</li>
        <li onClick={() => setVisible(true)}>自定义使用张数</li>
      </ul>
      <Modal
        visible={visible}
        showCloseButton={true}
        destroyOnClose={true}
        title="请输入核销券张数"
        content={
          <Input
            onChange={(value) => handleInput(value)}
            style={{ border: "1px solid #eee" }}
          />
        }
        actions={[
          {
            key: "submit",
            text: "确定",
            primary: true,
            onClick: handleSubmit,
          },
        ]}
        onClose={() => {
          setVisible(false);
          setNumber("");
        }}
      />
    </div>
  );
}
