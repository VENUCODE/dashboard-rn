import { Button, Modal } from "antd";
import { CiLocationOn } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { TbPhoneCalling } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { hostUri } from "../../fetch";

const AgentModal = ({ data, isModalVisible, handleCancel }) => {
  return (
    <Modal
      title={<h1 class="text-capitalize">{data.name}</h1>}
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
        style={{
          maxHeight: "400px",
          minWidth: "300px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        className="px-2"
      >
        <div>
          <img src={hostUri + "/" + data.profileImage} alt="profile" />
        </div>
        <div>
          <div className="row mb-2">
            <div className="col-10 text-lower text-capitalize">
              <IoMdPerson className="me-2" /> {data?.name}
            </div>
          </div>
          {/* //phone number */}
          <div className="row mb-2">
            <div className="col-10 text-lower">
              <CiMail className="me-2" /> {data?.email}
            </div>
            <div className="row mb-2">
              <div className="col-10 text-lower">
                <TbPhoneCalling className="me-2" />{" "}
                {data.mobile ? data.mobile : "Not specified"}
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-10 text-lower">
              <MdOutlineWorkOutline className="me-2" />
              {data.occupation ? data.occupation : "Not specified"}
            </div>
          </div>
          {/* //locatino  */}
          <div className="row mb-2">
            <div className="col-10 text-lower">
              <CiLocationOn className="me-2" />
              {data.location ? data.location : "Not specified"}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AgentModal;
