import React, { useState } from "react";
import { Layout as HelpdeskLayout, Menu } from "antd";
import { useRouter } from "next/router";
import shortLogo from "@/assets/images/logo/logo_short.png";
// import { Header } from "antd/es/layout/layout";

import { HiHome } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GiTicket } from "react-icons/gi";

const Layout = (props) => {
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
        router.push("/page1");
        break;

      case "3":
        router.push("/page2");
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
        {/* <Header style={{ padding: 0, background: colorBgContainer }}>
          Hello Header
        </Header> */}
        {props.children}
        {/* <img src={shortLogo?.src} alt="Logo" /> */}
      </HelpdeskLayout>
    </HelpdeskLayout>
  );
};

export default Layout;
