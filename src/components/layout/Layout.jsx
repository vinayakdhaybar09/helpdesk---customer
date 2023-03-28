import React, { useState } from "react";
import { Layout as HelpdeskLayout, Layout, Menu } from "antd";
import { useRouter } from "next/router";
import shortLogo from "@/assets/images/logo/logo_short.png";
import profile from "@/assets/images/ticket/profile.png";
// import { Header } from "antd/es/layout/layout";

import { HiHome } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { BsBellFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const { Header } = Layout;


const MainLayout = (props) => {
  const { Sider } = HelpdeskLayout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Home", "1", <HiHome />),
    getItem("Dashboard", "2", <MdDashboard />),
    getItem("Tickets", "3", <GiTicket />),
    getItem("Logout", "4", <FiLogOut />),
  ];

  const router = useRouter();

  const [collapsed, setCollapsed] = useState(true);
  // const [login, setLogin] = useState(true);
  // const [currentTab, setCurrentTab] = useState("0");

  // const [currentTab, setCurrentTab] = useState(
  //   path.pathname === "/"
  //     ? ["1"]
  //     : path.pathname === "/admin/user"
  //       ? ["2"]
  //       : ["0"]
  // );

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const handleMenuChange = (value) => {
    switch (value.key) {
      case "1":
        router.push("/home");
        break;

      case "2":
        router.push("/tickets");
        break;

      case "3":
        router.push("/tickets");
        break;

      case "4":
        localStorage.setItem("loggedIn", "loggedout");
        router.replace("/auth/login");
        break;

      default:
        break;
    }
  };

  return (
    <HelpdeskLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className={`${collapsed ? "wb-slider-collapsed" : "wb-slider"}`}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo-container">
            {collapsed ? (
              <img src={shortLogo?.src} alt="Logo" />
            ) : (
              <img src={shortLogo?.src} alt="Logo" />
            )}
          </div>
          <Menu
            theme="dark"
            // defaultSelectedKeys={currentTab}
            onClick={handleMenuChange}
            mode="inline"
            items={items}
          />
        </Sider>
      </div>
      <HelpdeskLayout className="site-layout">
        <Header className="header">
          <h1>Help Desk</h1>
          <div className="header-option">
            <BsBellFill className="bell-icon" />
            <div className="profile-image-box">
              <Image className="profile-image" src={profile} alt="profile" />
            </div>
            <RiArrowDropDownLine className="dropdown-icon" />
          </div>
        </Header>
        {props.children}
        {/* <img src={shortLogo?.src} alt="Logo" /> */}
      </HelpdeskLayout>
    </HelpdeskLayout>
  );
};

export default MainLayout;
