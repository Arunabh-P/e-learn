import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { IoIosNotifications } from 'react-icons/io';
const { Header } = Layout;
const NavBar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      className="d-flex justify-content-between ps-1 pe-5"
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <div className="d-flex justify-content-end gap-4 align-items-center">
        <div className="position-relative">
          <IoIosNotifications className="fs-4" />
          <span className="badge bg-warning rounded-circle p-1 position-absolute">
            3
          </span>
        </div>

        <div className="d-flex gap-3 align-items-center dropdown">
          <div>
            <img
              width={32}
              height={32}
              src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
              alt=""
              className="rounded-circle"
            />
          </div>
          <div
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h5 className="mb-0">Arunabh</h5>
            <p className="mb-0">arunabh1995@gmail.com</p>
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <Link
                className="dropdown-item py-1 mb-1"
                style={{ height: 'auto', lineHeight: '20px' }}
                to="/"
              >
                View Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item py-1 mb-1"
                style={{ height: 'auto', lineHeight: '20px' }}
                to="/"
              >
                Signout
              </Link>
            </li>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;