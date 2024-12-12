import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom"; 


const Container = styled.div`
  margin: 90px auto;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  padding-top: 20px;
  padding-bottom: 10rem;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;

  @media (min-width: 769px) {
    overflow-x: unset;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const HeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
`;

const TableRow = styled.tr`
  text-align: center;
  background-color: ${(props) => (props.even ? "#f9f9f9" : "#fff")};
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  color: ${(props) =>
    props.status === "Completed"
      ? "green"
      : props.status === "Pending"
      ? "orange"
      : props.status === "Failed"
      ? "red"
      : "inherit"};

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > div {
      margin-bottom: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  background-color: rgba(27, 99, 146, 1);
  color: white;
  border: none;
  border-radius: 4px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    margin: 0 3px;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// Mock API data
const mockData = [
  {
    details: "Access Bank(******3232)",
    date: "01 December 2024 10:00 AM",
    amount: "₦99030000",
    status: "Completed",
    txId: "TX123456789",
    type: "withdrawal",
  },
  {
    details: "Polaris Bank(******8930)",
    date: "8 December 2024 10:00 AM",
    amount: "₦4030000",
    status: "Failed",
    txId: "TX987654321",
    type: "withdrawal",
  },
  {
    details: "Polaris Bank(******8930)",
    date: "12 December 2024 10:00 AM",
    amount: "₦703889986",
    status: "Pending",
    txId: "TX43733321",
    type: "withdrawal",
  },
];

const WithdrawalHistory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [dateFilter, setDateFilter] = useState("");

  const itemsPerPage = 10;

  useEffect(() => {
    setData(mockData);
    setFilteredData(mockData);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleDateFilter = (event) => {
    const value = event.target.value;
    setDateFilter(value);

    if (value) {
      const filtered = data.filter((item) => item.date.startsWith(value));
      setFilteredData(filtered);
      setCurrentPage(1);
    } else {
      setFilteredData(data);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container>
      <Title>Withdrawal History</Title>
      <FilterContainer>
        <div>
          <label htmlFor="dateFilter">Filter by Date: </label>
          <Input
            type="date"
            id="dateFilter"
            value={dateFilter}
            onChange={handleDateFilter}
          />
        </div>
        <div>
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={startIndex + itemsPerPage >= filteredData.length}
          >
            Next
          </Button>
        </div>
      </FilterContainer>
      <TableWrapper>
        <Table>
          <TableHead>
            <tr>
              <HeaderCell>Account Details</HeaderCell>
              <HeaderCell>Date</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Status</HeaderCell>
              <HeaderCell>Action</HeaderCell>
            </tr>
          </TableHead>
          <tbody>
            {currentItems.map((item, index) => (
              <TableRow key={index} even={index % 2 === 0}>
                <TableCell>{item.details}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell status={item.status}>{item.status}</TableCell>
                <TableCell>
                  <Link to="/withdrawaldetails" state={{ transaction: item }}>
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default WithdrawalHistory;
