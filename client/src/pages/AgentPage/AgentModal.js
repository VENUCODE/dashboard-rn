import { Button, Modal } from "antd";
import { FaLocationPin } from "react-icons/fa6";

import { CiMail } from "react-icons/ci";

const AgentModal = ({ isModalVisible, handleCancel }) => {
  const data = {
    role: "agent",
    _id: "65ec543f9206b62b0e6e4655",
    usertype: "agent",
    name: "ganesh",
    email: "gani@gmail.com",
    mobile: "9704504152",
    password: "Rameshrazole@1",
    location: "location of agent",
    __v: 0,
    profileImage: "uploads\\image-1710346510172.jpg",
    status: "running",
    updatedAt: "2024-04-27T18:03:27.852Z",
  };
  return (
    <Modal
      title={data.jobTitle}
      open={isModalVisible}
      onCancel={handleCancel}
      centered
      footer={[
        <Button key="close" onClick={handleCancel}>
          Close
        </Button>,
      ]}
    >
      <div
        style={{ maxHeight: "400px", overflowY: "auto", overflowX: "hidden" }}
      >
        <div className="row mb-2">
          <div className="col-10 text-lower">
            <CiMail /> {data?.email}
          </div>
        </div>
        {/* //phone number */}
        <div className="row mb-2">
          <div className="col-10 text-lower">
            <CiMail /> {data?.email}
          </div>
        </div>
        {/* //locatino  */}
        <div className="row mb-2">
          <div className="col-10 text-lower">
            <FaLocationPin /> {data?.location}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AgentModal;
