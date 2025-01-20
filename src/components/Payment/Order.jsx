import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [ordersData, setOrdersData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const totalPages = 3;

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios({
          method: "POST",
          url: `${baseURL}${summaryAPI.fetchTransactions.url}`,
          data: { email, password },
          withCredentials: true,});
          
          const { data } = response;
        setOrdersData((prevOrders) => ({
          ...prevOrders,
          [currentPage]: data.orders, 
        }));
      } catch (err) {
        setError('Failed to fetch orders. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentPage]);

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

  const filteredOrders = ordersData[currentPage] ? filterOrdersByDate(ordersData[currentPage]) : [];

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

        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
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
                    <Link to={`/order/${encodeURIComponent(order.orderId)}`}>View Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableElement>
        )}

        <Contain>
          <button
            className={currentPage === 1 ? "disabled" : ""}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
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
