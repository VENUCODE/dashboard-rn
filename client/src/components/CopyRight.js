import React from "react";

const CopyRight = () => {
  return (
    <div class="footer row card mb-0 ">
      <div class="copyright col">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="vaajlabs.com" target="_blank">
            vaajlabs
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
