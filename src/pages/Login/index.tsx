import React, { useState } from "react";
import { Form, Input, Button, Image } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [code, setCode] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [codeDisabled, setCodeDisable] = useState(true);
  const [btnDisabled, setBtnDisable] = useState(true);
  const [isCounting, setIsCounting] = useState(false);
  const [time, setTime] = useState(3);

  const handleChecked = (value: any) => {
    setIsRead(!isRead);
  };

  const handleMobile = (value: any) => {
    if (value.length === 11) {
      setCodeDisable(false);
    }
  };

  const handleRecieve = () => {
    if (isCounting) return;
    setIsCounting(true);
    setCodeDisable(true);
    const interval = setInterval(() => {
      setTime((pre: any) => pre - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setTime(3);
      setIsCounting(false);
      setCodeDisable(false);
    }, 3000);
  };

  const handleCode = (value: any) => {
    setCode(value);
  };

  const onSubmit = () => {
    const values = form.getFieldsValue();
    navigate("/home");
    console.log(values, "------values");
  };

  return (
    <div className="container_login">
      <Image src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" width={100} height={100} fit="cover" />
      <Form
        layout="horizontal"
        className="container_login"
        form={form}
        footer={
          <Button
            disabled={btnDisabled && !code}
            onClick={onSubmit}
            block
            type="submit"
            color="primary"
            shape="rounded"
          >
            登录
          </Button>
        }
      >
        <Form.Item name="mobile" label={<i className="iconfont">&#xe611;</i>}>
          <Input
            placeholder="请输入手机号"
            clearable
            onClear={() => {
              setCodeDisable(true);
              setBtnDisable(true);
            }}
            maxLength={11}
            onChange={handleMobile}
          />
        </Form.Item>
        <Form.Item
          name="code"
          label={<i className="iconfont">&#xe623;</i>}
          extra={
            <Button
              disabled={codeDisabled}
              className="item_code"
              color="primary"
              fill="none"
              onClick={handleRecieve}
            >
              {isCounting ? time + "s后重新发送" : "获取验证码"}
            </Button>
          }
        >
          <Input
            placeholder="请输入验证码"
            clearable
            value={code}
            onChange={handleCode}
          />
        </Form.Item>

        <div className="that_protocol">
          <em
            onClick={handleChecked}
            className={isRead ? "isChecked" : ""}
          ></em>
          <div>
            已阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
