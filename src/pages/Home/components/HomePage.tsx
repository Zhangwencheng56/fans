import { Swiper } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate: any = useNavigate()
  return (
    <>
      <div className="that_banner_wraper">
        <Swiper loop autoplay>
          {new Array(6).fill(null).map((_, index) => (
            <Swiper.Item key={index}>
              <img
                className="item_img"
                src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                alt=""
              />
              {/* <div className="item_banner">{index + 1}</div> */}
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className="that_main_wraper">
        {/* 成员列表 */}
        <li>
          <div>
            <i className="iconfont">&#xe7cc;</i>
          </div>
          <div>人员列表</div>
        </li>

        {/* 活动日程 */}
        <li>
          <div>
            <i className="iconfont">&#xe614;</i>
          </div>
          <div>活动日程</div>
        </li>

        {/* 商城 */}
        <li onClick={() => {
                navigate("/shop/list");
              }}>
          <div>
            <i className="iconfont">&#xe62d;</i>
          </div>
          <div>商城</div>
        </li>
      </div>
    </>
  );
}
