import React from "react";
import AddAdvert from "./AddAdvert";
import AdList from "./AdList";

const Advertisement = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <AddAdvert />
        <div className="container">
          <AdList />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
