import { MdOutlineDashboard } from "react-icons/md";
import { RiBriefcase2Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import { LiaPersonBoothSolid } from "react-icons/lia";
import { FaAdversal, FaFileUpload, FaUserTie } from "react-icons/fa";
import { Tooltip } from "antd";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcAdvertising } from "react-icons/fc";

const Asidebar = ({ setNavToggle }) => {
  const showToolTip = useMediaQuery("(min-width : 769px)");
  const location = useLocation();
  const [active, setActive] = useState(0);

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
      link: "/agents",
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
    {
      title: "Advertise",
      icon: <FcAdvertising color="#E35A60" size={30} />,
      link: "/advertise",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = sidebarItems.findIndex(
      (item) =>
        currentPath === item.link ||
        (currentPath.startsWith("/suppliers") && item.link === "/suppliers")
    );

    setActive(activeIndex);
  }, [location.pathname]);

  return (
    <div className="deznav">
      <div className="deznav-scroll ">
        <ul className="metismenu" id="menu">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`mm${index === active ? "-active" : ""}`}
              aria-expanded="false"
              onClick={() => {
                setActive(index);
                setNavToggle(false);
              }}
            >
              {showToolTip ? (
                <Link to={item.link} aria-expanded="false">
                  <Tooltip
                    title={item.title}
                    placement="right"
                    color="#E35A60aa"
                    trigger={"hover"}
                  >
                    {item.icon} <span className="nav-text">{item.title}</span>
                  </Tooltip>
                </Link>
              ) : (
                <Link to={item.link} aria-expanded="false">
                  {item.icon} <span className="nav-text">{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Asidebar;
