import React, { useState } from "react";
import styled from "styled-components";
import ProfileImg from "../dashboard/images/Profileimage.png";
import backgroundImage from "../chooserole/images/bg.png";

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 50vh;
  background: url(${backgroundImage}) no-repeat;
  background-color: #f4f7f9;
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    padding: 8rem;
  }
`;

const DashboardContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: auto;

  @media (min-width: 820px) {
    height: 300px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      padding: 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: #555;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-left: 3px solid transparent;
      transition: all 0.3s ease;

      &.active {
        font-weight: bold;
        color: #004a79;
        border-left: 3px solid #004a79;
      }

      &:hover {
        background-color: #f4f7f9;
      }
    }
  }
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #777;
  }

  a {
    font-size: 0.9rem;
    color: #004a79;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AddressCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  h4 {
    font-size: 0.9rem;
    color: grey;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #555;
  }

  a {
    font-size: 0.9rem;
    color: #004a79;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const OrderHistorySection = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h4 {
      margin: 0;
      font-size: 1.25rem;
      color: #333;
    }

    a {
      font-size: 0.9rem;
      color: #004a79;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: #003355;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: left;
      padding: 0.75rem;
      font-size: 0.9rem;
      border-bottom: 1px solid #ddd;
    }

    th {
      font-weight: bold;
      color: #004a79;
    }

    td {
      color: #555;
    }

    a {
      color: #004a79;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: #003355;
      }
    }
  }

  @media (max-width: 768px) {
    overflow-x: auto;

    table {
      width: 600px;
    }
  }
`;

const Dashboard = ({ user }) => {
  const { name, role, address, email, phone, orders } = user;

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <DashboardWrapper>
      <DashboardContent>
        <Sidebar>
          <h2>Navigation</h2>
          <ul>
            <li
              className={activeMenu === "Dashboard" ? "active" : ""}
              onClick={() => handleMenuClick("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={activeMenu === "Order History" ? "active" : ""}
              onClick={() => handleMenuClick("Order History")}
            >
              Order History
            </li>
            <li
              className={activeMenu === "Settings" ? "active" : ""}
              onClick={() => handleMenuClick("Settings")}
            >
              Settings
            </li>
            <li
              className={activeMenu === "Log-out" ? "active" : ""}
              onClick={() => handleMenuClick("Log-out")}
            >
              Log-out
            </li>
          </ul>
        </Sidebar>

        <MainContent>
          {activeMenu === "Dashboard" && (
            <div>
              <ProfileSection>
                <ProfileCard>
                  <img src={ProfileImg} alt={`${name} profile`} />
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <a href="#">Edit Profile</a>
                </ProfileCard>

                <AddressCard>
                  <h4>CURRENT ADDRESS</h4>
                  <p>{address}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <a href="#">Edit Address</a>
                </AddressCard>
              </ProfileSection>

              {/* Show Recent Order History on Dashboard, without the "View All" link */}
              <OrderHistorySection>
                <div className="header">
                  <h4>Recent Order History</h4>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map(
                      (
                        order,
                        index // Show only a subset of recent orders (e.g., last 5)
                      ) => (
                        <tr key={index}>
                          <td>{order.id}</td>
                          <td>{order.date}</td>
                          <td>
                            ${order.total.toFixed(2)} ({order.products}{" "}
                            Products)
                          </td>
                          <td>{order.status}</td>
                          <td>
                            <a href="#">View Details</a>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </OrderHistorySection>
            </div>
          )}

          {activeMenu === "Order History" && (
            <OrderHistorySection>
              <div className="header">
                <h4>Order History</h4> {/* Update title */}
                <a href="#">View All</a>{" "}
                {/* Keep View All link on the Order History page */}
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>
                        ${order.total.toFixed(2)} ({order.products} Products)
                      </td>
                      <td>{order.status}</td>
                      <td>
                        <a href="#">View Details</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </OrderHistorySection>
          )}
        </MainContent>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
