import React from "react";

const JobsTable = () => {
  return (
    <>
      <div class="col-xl-12">
        <div class="table-responsive fs-14">
          <table
            class="table display mb-4 dataTablesCard overflow-hidden card-table"
            id="example5"
          >
            <thead>
              <tr>
                <th>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkAll"
                      required=""
                    />
                    <label class="form-check-label" for="checkAll"></label>
                  </div>
                </th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Property</th>
                <th>Location</th>
                <th>Price</th>
                <th>Type</th>
                <th>Agent</th>
                <th>Status</th>
                <th class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox5"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox5"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>James WItcwicky</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Flat 2551 Center
                  <br /> London 287223
                </td>
                <td>$521k</td>
                <td>ABC356</td>
                <td>Kevin Jr.</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox51"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox51"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Stephani</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Straight 22th London
                  <br /> 51256
                </td>
                <td>$235k</td>
                <td>TY1255</td>
                <td>Louis</td>
                <td>
                  <span class="text-primary">Negotiation</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox52"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox52"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Smantha Jr.</td>
                <td class="text-ov">
                  65SM Alexander
                  <br /> Court,New York
                </td>
                <td class="text-ov">
                  Corner Street 5th
                  <br /> London 126623{" "}
                </td>
                <td>$116k</td>
                <td>UJ2356</td>
                <td>Melinda S.</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox53"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox53"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Hawkins</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Waves Street 1st
                  <br /> London 2441
                </td>
                <td>$763k</td>
                <td>RE5135</td>
                <td>Peter P.</td>
                <td>
                  <span class="text-primary">Negotiation</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox54"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox54"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Sanji Fujiwara</td>
                <td class="text-ov">
                  5122 Franklin <br />
                  Court,New York
                </td>
                <td class="text-ov">
                  Flat 2551 Center
                  <br /> London 287223
                </td>
                <td>$245k</td>
                <td>POT434</td>
                <td>Robinson</td>
                <td>
                  <span class="text-success">Approved</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox55"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox55"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Ilham Supriadi</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Waves Street 1st
                  <br /> London 2441
                </td>
                <td>$765k</td>
                <td>VBDF42</td>
                <td>Rendy</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox56"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox56"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Yun-Yun</td>
                <td class="text-ov">
                  5122 Franklin
                  <br /> Court,New York
                </td>
                <td class="text-ov">
                  Corner Street 5th
                  <br /> London 126623{" "}
                </td>
                <td>$521k</td>
                <td>QWR55</td>
                <td>Thomas</td>
                <td>
                  <span class="text-primary">Negotiation</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox5"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox5"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>James WItcwicky</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Flat 2551 Center
                  <br /> London 287223
                </td>
                <td>$521k</td>
                <td>ABC356</td>
                <td>Kevin Jr.</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox51"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox51"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Stephani</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Straight 22th London
                  <br /> 51256
                </td>
                <td>$235k</td>
                <td>TY1255</td>
                <td>Louis</td>
                <td>
                  <span class="text-primary">Negotiation</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox52"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox52"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Smantha Jr.</td>
                <td class="text-ov">
                  65SM Alexander
                  <br /> Court,New York
                </td>
                <td class="text-ov">
                  Corner Street 5th
                  <br /> London 126623{" "}
                </td>
                <td>$116k</td>
                <td>UJ2356</td>
                <td>Melinda S.</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox53"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox53"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Hawkins</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Waves Street 1st
                  <br /> London 2441
                </td>
                <td>$763k</td>
                <td>RE5135</td>
                <td>Peter P.</td>
                <td>
                  <span class="text-primary">Negotiation</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox54"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox54"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Sanji Fujiwara</td>
                <td class="text-ov">
                  5122 Franklin <br />
                  Court,New York
                </td>
                <td class="text-ov">
                  Flat 2551 Center
                  <br /> London 287223
                </td>
                <td>$245k</td>
                <td>POT434</td>
                <td>Robinson</td>
                <td>
                  <span class="text-success">Approved</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check custom-checkbox ms-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox5"
                      required=""
                    />
                    <label
                      class="form-check-label"
                      for="customCheckBox5"
                    ></label>
                  </div>
                </td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>James WItcwicky</td>
                <td class="text-ov">
                  TY35 Avenue <br />
                  GGLondon Center
                </td>
                <td class="text-ov">
                  Flat 2551 Center
                  <br /> London 287223
                </td>
                <td>$521k</td>
                <td>ABC356</td>
                <td>Kevin Jr.</td>
                <td>
                  <span class="text-warning">Pending</span>
                </td>
                <td class="text-end">
                  <div class="dropdown ms-auto">
                    <div class="btn-link" data-bs-toggle="dropdown">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                          stroke="#3E4954"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Accept order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        Reject order
                      </a>
                      <a
                        class="dropdown-item text-black"
                        href="javascript:void(0);"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JobsTable;
