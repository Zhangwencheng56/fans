import React from "react";
import { Input, NavBar } from "antd-mobile";
import { SearchOutline } from "antd-mobile-icons";
import "./style.scss";

const ShopPage = () => {
  const back = () => {};
  return (
    <div className="container_shop_list">
      <NavBar
        style={{
          "--height": "60px",
          "--border-bottom": "1px #eee solid",
        }}
        onBack={back}
      >
        官方商城
      </NavBar>
      <div className="shop_content">
        <div className="that_search">
          <div className="item_input">
            <SearchOutline />
            <Input placeholder="请输入关键词检索" clearable />
            <div>搜索</div>
          </div>
          <i className="iconfont">&#xe63b;</i>
        </div>

        <ul className="that_goods_wraper">
          {new Array(10).fill(null).map((item: any, index) => {
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
                  <div className="price">
                    <span>￥</span><span>999.9</span>
                    <div>100人已付款</div>
                  </div>
                  <i className="iconfont">&#xe81f;</i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ShopPage;
