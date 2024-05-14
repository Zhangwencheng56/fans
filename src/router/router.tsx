import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ActivityTiming from "../pages/Activity/Timing";
import ActivityDetail from "../pages/Activity/Detail";
import ActivityChoose from "../pages/Activity/Choose";
import PersonList from "../pages/Person/List";
import PersonDetail from "../pages/Person/Detail";
import ShopList from "../pages/Shop/List";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activity/timing" element={<ActivityTiming />} />
        <Route path="/activity/detail" element={<ActivityDetail />} />
        <Route path="/activity/choose" element={<ActivityChoose />} />
        <Route path="/person/list" element={<PersonList />} />
        <Route path="/person/detail" element={<PersonDetail />} />
        <Route path="/shop/list" element={<ShopList />} />
        {/* 其他页面路由 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
