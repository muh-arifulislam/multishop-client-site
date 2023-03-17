import React from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <Breadcrumb>
        <span className="breadcrumb-item active">Dashboard</span>
      </Breadcrumb>
      <div className="px-xl-5 row ">
        {/* dashboard navigation container  */}
        <div className="col-3">
          <div
            style={{ backgroundColor: "rgba(52, 58, 64, 0.6)" }}
            className=" p-3 d-flex rounded justify-content-between"
          >
            <h5 className="d-flex mb-0" style={{ color: "black" }}>
              <svg
                width={"25px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z" />
              </svg>
              <span className="ml-2">Dashboards</span>
            </h5>
            <p className="mb-0">
              <i class="fa fa-chevron-right"></i>
            </p>
          </div>
          <div style={{ color: "black", fontWeight: "500" }}>
            <div className="p-3 my-1 rounded dashboard-nav-item">
              <p className="d-flex align-items-center mb-0">
                <svg
                  style={{ width: "25px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
                <span className="ml-2">Manage My Account</span>
              </p>
            </div>
            <div className="p-3 my-1 rounded dashboard-nav-item">
              <p className="d-flex align-items-center mb-0">
                <svg
                  style={{ width: "25px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
                <span className="ml-2">My Orders</span>
              </p>
            </div>
            <div className="p-3 my-1 rounded dashboard-nav-item">
              <p className="d-flex align-items-center mb-0">
                <svg
                  style={{ width: "25px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
                <span className="ml-2">My Wishlist</span>
              </p>
            </div>
            <div className="p-3 my-1 rounded dashboard-nav-item">
              <p className="d-flex align-items-center mb-0">
                <svg
                  width={"25px"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <span className="ml-2">My Reviews</span>
              </p>
            </div>
            <div className="p-3 my-1 rounded dashboard-nav-item">
              <p className="d-flex align-items-center mb-0">
                <svg
                  style={{ width: "25px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
                <span className="ml-2">Logout</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Transition ID</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Sony DSKR</td>
                    <td>May 20, 2022</td>
                    <td>40</td>
                    <td>254sfsdfsd5</td>
                    <td>
                      <button className="btn btn-sm px-[27px]">paid</button>
                    </td>
                    <td>
                      <label
                        htmlFor="confirm-modal"
                        className="btn btn-sm btn-error text-white modal-button"
                      >
                        remove
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
