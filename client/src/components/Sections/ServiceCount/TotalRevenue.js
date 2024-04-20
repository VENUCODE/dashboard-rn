import React from "react";
import TimelineChart from "./TimelineChart";

const TotalRevenue = ({ color }) => {
  return (
    <div className="col-xl-6 col-xxl-6">
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h3 className="fs-18 text-black">Total Revenue</h3>
        </div>
        <div className="card-body  pb-0">
          <div className="d-flex flex-wrap align-items-center">
            <span className="fs-28 text-black font-w600 me-3">$678,345</span>
            <p className="me-sm-auto me-3 mb-sm-0 mb-3">last month $563,443</p>
            <div className="d-flex align-items-center">
              <svg
                className="me-3"
                width="87"
                height="47"
                viewBox="0 0 87 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8043 20.9254C15.2735 14.3873 5.88029 27.282 3 34.5466V46.2406H85V4.58005C70.8925 -0.868404 70.5398 8.66639 60.8409 19.5633C51.1419 30.4602 47.9677 29.0981 29.8043 20.9254Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M3 35.2468C5.88029 27.9822 15.2735 15.0875 29.8043 21.6257C47.9677 29.7984 51.1419 31.1605 60.8409 20.2636C70.5398 9.36665 70.8925 -0.168147 85 5.28031"
                  stroke="#37D159"
                  stroke-width="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="44"
                    y1="-36.4332"
                    x2="44"
                    y2="45.9686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#37D159" offset="0" />
                    <stop offset="1" stop-color="#37D159" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="fs-22 text-success me-2">7%</span>
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6L6 2.62268e-07L12 6" fill="#37D159" />
              </svg>
            </div>
          </div>
          <div id="chartTimeline">
            <TimelineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
