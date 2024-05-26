import { MdOutlineDashboard } from "react-icons/md";
import { RiBriefcase2Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import { LiaPersonBoothSolid } from "react-icons/lia";
import { FaFileUpload, FaUserTie } from "react-icons/fa";
import { Tooltip } from "antd";

import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { useState } from "react";
const Asidebar = ({ setNavToggle }) => {
  const showToolTip = useMediaQuery("(min-width : 769px)");

  const sidebarItems = [
    {
      title: "Dash Board",
      icon: <MdOutlineDashboard color="#E35A60" size={30} />,
      link: "/",
    },
    {
      title: "Properties",
      icon: <BiBuildings color="#E35A60" size={30} />,
      link: "/properties",
    },
    {
      title: "Services",
      icon: <GrServices color="#E35A60" size={30} />,
      link: "/services",
    },
    {
      title: "Products",
      icon: <AiOutlineShop color="#E35A60" size={30} />,
      link: "/products",
    },
    {
      title: "Jobs",
      icon: <RiBriefcase2Line color="#E35A60" size={30} />,
      link: "/jobs",
    },
    {
      title: "Agents",
      icon: <FaBuildingUser color="#E35A60" size={30} />,
      link: "agents",
    },
    {
      title: "Suppliers",
      icon: <LiaPersonBoothSolid color="#E35A60" size={30} />,
      link: "/suppliers",
    },

    {
      title: "Manager",
      icon: <FaUserTie color="#E35A60" size={30} />,
      link: "/manager",
    },
    {
      title: "Upload",
      icon: <FaFileUpload color="#E35A60" size={30} />,
      link: "/upload",
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll ">
          <ul className="metismenu" id="menu">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`mm${index === active ? "-active" : ""}`}
                area-expanded="false"
                onClick={() => {
                  setActive(index);
                  setNavToggle(false);
                }}
              >
                {showToolTip && (
                  <Link
                    // className="has-arrow ai-icon"
                    to={item.link}
                    aria-expanded="false"
                  >
                    <Tooltip
                      title={item.title}
                      placement="right"
                      color="#E35A60aa"
                      trigger={"hover"}
                    >
                      {item.icon}{" "}
                      <span className="nav-text ">{item.title}</span>
                    </Tooltip>
                  </Link>
                )}
                {!showToolTip && (
                  <Link
                    // className="has-arrow ai-icon"
                    to={`${item.link}`}
                    aria-expanded="false"
                  >
                    {item.icon} <span className="nav-text">{item.title}</span>
                  </Link>
                )}
                <ul>
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
