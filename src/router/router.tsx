import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ActivityTiming from "../pages/Activity/Timing";
import ActivityDetail from "../pages/Activity/Detail";
import ActivityChoose from "../pages/Activity/Choose";
import PersonList from "../pages/Person/List";
import PersonDetail from "../pages/Person/Detail";
import ScheduleList from "../pages/Schedule/List";
import ScheduleDetail from "../pages/Schedule/Detail";
import ShopList from "../pages/Shop/List";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* 主页 */}
        <Route path="/home" element={<Home />} />
        {/* 登录页 */}
        <Route path="/login" element={<Login />} />
        {/* 运营  */}
        <Route path="/activity/timing" element={<ActivityTiming />} />
        <Route path="/activity/detail" element={<ActivityDetail />} />
        <Route path="/activity/choose" element={<ActivityChoose />} />
        <Route path="/person/list" element={<PersonList />} />
        <Route path="/person/detail" element={<PersonDetail />} />
        <Route path="/shop/list" element={<ShopList />} />
        <Route path="/schedule/detail" element={<ScheduleDetail />} />
        <Route path="/schedule/list" element={<ScheduleList />} />
        {/* 其他页面路由 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
