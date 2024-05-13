import { Swiper } from "antd-mobile";
import React from "react";

export default function HomePage() {
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
        {/* 团队介绍 */}
        <div>
          <div>
            <i className="iconfont">&#xe62d;</i>
          </div>
          <div>团队介绍</div>
        </div>
        {/* 成员列表 */}
        <div>
          <div>
            <i className="iconfont">&#xe7cc;</i>
          </div>
          <div>人员列表</div>
        </div>

        {/* 活动日程 */}
        <div>
          <div>
            <i className="iconfont">&#xe614;</i>
          </div>
          <div>活动日程</div>
        </div>
      </div>

      <ul className="that_shop_wraper">
        {new Array(6).fill(null).map((item: any, index) => {
          return (
            <li>
              <div className="item_img">
                <img
                  src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                  alt=""
                />
              </div>
              <h3>商品名称</h3>
              <div className="item_footer">
                ￥<i>999.9</i>
                <span>100人已付款</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
