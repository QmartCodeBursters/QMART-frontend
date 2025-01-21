import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  
  const totalPages = 3;

  
  const ordersData = {
    1: [
      { orderId: '#1521', name: 'John Doe', date: '2023-01-09', total: '#200.00', status: 'Processing' },
    ],

  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const filterOrdersByDate = (orders) => {
    if (!startDate && !endDate) return orders;

    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      return (
        (!start || orderDate >= start) &&
        (!end || orderDate <= end)
      );
    });

    return filteredOrders;
  };

  
  const filteredOrders = filterOrdersByDate(ordersData[currentPage]);

  return (
    <Wrapper>
      
      <Table>
        <TableHeading>Transaction History</TableHeading>
        
        {/* Date Filter */}
        <DateFilter>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
          <select name="" id="Options">
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
          </select>
        </DateFilter>

        
        <TableElement>
          <thead>
            <tr className="up">
              <td>NAME</td>
              <td>DATE</td>
              <td>TOTAL</td>
              <td>STATUS</td>
              <td> </td>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td className="view-details">
                  {/* Link to the OrderDetails page with orderId in URL */}
                  <Link to={`/order/${encodeURIComponent(order.orderId)}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </TableElement>

        
        <Contain>
          <button
            className={currentPage === 1 ? "disabled" : ""}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button onClick={() => handlePageChange(1)}>1</button>
          <button onClick={() => handlePageChange(2)}>2</button>
          <button onClick={() => handlePageChange(3)}>3</button>
          <button
            className={currentPage === totalPages ? "disabled" : ""}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </Contain>
      </Table>
    </Wrapper>
  );
};

export default Order;






// Styled Components

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const HamburgerMenu = styled.div`
  position:absolute; ;
  top: 140px;
  left: 290px;
  cursor: pointer;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 999;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;
  padding:9rem 2.3rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Table = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
`;

const DateFilter = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px; 

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    width: 200px;

    &:focus {
      border-color: #fa8232;
      outline: none;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;

    &:hover {
      background-color: #f1f1f1;
    }

    &.active {
      background-color: #fa8232;
      color: white;
    }

    &.disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }
`;

const TableHeading = styled.h2`
  text-align: left;
  margin-bottom: 20px;
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse; 
  text-align: left;
  th, td {
    padding: 12px;
    text-align: left;
  }

  td {
    font-size: 14px;
  }

  .up {
    background-color: #f9f9f9;
  }

  tr:hover td {
    background-color: #f1f1f1;
  }

  .view-details {
    background-color: #ffffff;
  }

  .view-details a {
    text-decoration: none;
    color: #007bff;
    font-size: 14px;
  }

  .view-details a:hover {
    text-decoration: underline;
  }
`;
