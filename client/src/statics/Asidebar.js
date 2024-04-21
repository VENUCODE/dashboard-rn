import { MdOutlineDashboard } from "react-icons/md";
import { RiBriefcase2Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import { LiaPersonBoothSolid } from "react-icons/lia";
import { FaUserTag } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { Tooltip } from "antd";

import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { useState } from "react";
const Asidebar = () => {
  const showToolTip = useMediaQuery("(min-width : 769px)");

  const sidebarItems = [
    {
      title: "Dash Board",
      icon: <MdOutlineDashboard size={30} />,
      link: "/",
    },
    {
      title: "Properties",
      icon: <BiBuildings size={30} />,
      link: "/properties",
      subMenu: [
        { title: "Residential", link: "/properties/residential" },
        { title: "Commercial", link: "/properties/commercial" },
      ],
    },
    {
      title: "Services",
      icon: <GrServices size={30} />,
      link: "/services",
      subMenu: [
        { title: "Service A", link: "/services" },
        { title: "Service B", link: "/services" },
      ],
    },
    {
      title: "Products",
      icon: <AiOutlineShop size={30} />,
      link: "/products",
      subMenu: [
        { title: "Product A", link: "/products" },
        { title: "Product B", link: "/products" },
      ],
    },
    {
      title: "Jobs",
      icon: <RiBriefcase2Line size={30} />,
      link: "/jobs",
      subMenu: [
        { title: "Job A", link: "/jobs" },
        { title: "Job B", link: "/jobs" },
      ],
    },
    {
      title: "Agents",
      icon: <FaBuildingUser size={30} />,
      link: "agents",
      subMenu: [
        { title: "Agent A", link: "/agents" },
        { title: "Agent B", link: "/agents" },
      ],
    },
    {
      title: "Suppliers",
      icon: <LiaPersonBoothSolid size={30} />,
      link: "/suppliers",
      subMenu: [
        { title: "Supplier A", link: "/suppliers" },
        { title: "Supplier B", link: "/suppliers" },
      ],
    },
    {
      title: "Customers",
      icon: <FaUserTag size={30} />,
      link: "/customers",
      subMenu: [
        { title: "Customer A", link: "/customers" },
        { title: "Customer B", link: "/customers" },
      ],
    },
    {
      title: "Manager",
      icon: <FaUserTie size={30} />,
      link: "/manager",
      subMenu: [
        { title: "Manager A", link: "/manager" },
        { title: "Manager B", link: "/manager" },
      ],
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`mm${index === active ? "-active" : ""}`}
                area-expanded="false"
                onClick={() => {
                  setActive(index);
                }}
              >
                {showToolTip && (
                  <Link
                    className="has-arrow ai-icon"
                    to={item.link}
                    aria-expanded="false"
                  >
                    <Tooltip
                      title={item.title}
                      placement="right"
                      color="#2323ffaa"
                      trigger={"hover"}
                    >
                      {item.icon}{" "}
                      <span className="nav-text ">{item.title}</span>
                    </Tooltip>
                  </Link>
                )}
                {!showToolTip && (
                  <Link
                    className="has-arrow ai-icon"
                    to={`${item.link}`}
                    aria-expanded="false"
                  >
                    {item.icon} <span className="nav-text">{item.title}</span>
                  </Link>
                )}
                <ul aria-expanded="false">
                  {item.subMenu?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
