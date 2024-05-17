import React from "react";

export default function ShopComponent() {
  return (
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
  );
}
