import React, { useState } from 'react';
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
      { orderId: '#5829', name: 'Abraham Lincoln', date: '2023-02-15', total: '#120.00', status: 'On the Way' },
      { orderId: '#3010', name: 'Alice Wonderland', date: '2023-01-25', total: '#300.00', status: 'Processing' },
      { orderId: '#1150', name: 'Mark Twain', date: '2023-01-28', total: '#500.00', status: 'Shipped' },
      { orderId: '#6743', name: 'Elon Musk', date: '2023-02-01', total: '#800.00', status: 'On the Way' },
    ],
    2: [
      { orderId: '#4295', name: 'Tiny Tom', date: '2023-02-03', total: '#75.00', status: 'Completed' },
      { orderId: '#3024', name: 'Yogi Berra', date: '2023-02-09', total: '#650.00', status: 'Completed' },
      { orderId: '#7532', name: 'Marie Curie', date: '2023-02-05', total: '#240.00', status: 'Shipped' },
      { orderId: '#1142', name: 'Julius Caesar', date: '2023-02-13', total: '#380.00', status: 'Completed' },
      { orderId: '#5682', name: 'Albert Einstein', date: '2023-02-16', total: '#150.00', status: 'On the Way' },
    ],
    3: [
      { orderId: '#2984', name: 'John Doe', date: '2023-01-15', total: '#90.00', status: 'Completed' },
      { orderId: '#9741', name: 'Walter White', date: '2023-02-19', total: '#225.00', status: 'Completed' },
      { orderId: '#5098', name: 'Sherlock Holmes', date: '2023-02-01', total: '#120.00', status: 'Completed' },
      { orderId: '#8741', name: 'Bruce Wayne', date: '2023-02-10', total: '#180.00', status: 'Processing' },
      { orderId: '#9911', name: 'Tony Stark', date: '2023-02-25', total: '#550.00', status: 'On the Way' },
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
    if (!startDate && !endDate) return orders;  // Return all orders if no dates are selected

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
        <TableHeading>Payment History</TableHeading>
        
        {/* Date Filter */}
        <DateFilter>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
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



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const Table = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;  /* Set a max-width for the table */
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

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;

    input {
      width: 100%;
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

  @media (max-width: 600px) {
    gap: 5px;
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
