
import styled from "styled-components";

const Recents = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.2);
  margin-bottom: 2rem;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.2rem;
    color: rgba(27, 99, 146, 1);
  }

  a {
    font-size: 0.9rem;
    color: rgba(27, 99, 146, 1);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

const Icon = styled.div`
  background: #eee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

const Details = styled.div`
  flex: 1;
  margin-left: 10px;

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
  }

  span {
    font-size: 0.8rem;
    color: #888;
  }
`;

const Amount = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
`;


import React, { useEffect, useState } from 'react';

const RecentPayments = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactionHistory = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}${summaryAPI.fetchTransactions.url}`,
        data: { email, password },
        withCredentials: true,});

      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }

      const data = await response.json();
      if (data.success) {
        setTransactions(data.data); 
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  return (
    <Recents>
      <HeaderRow>
        <h3>Recent Payment History</h3>
        <a href="/paymenthistory">View All</a>
      </HeaderRow>
      {loading ? (
        <p>Loading...</p>
      ) : transactions.length > 0 ? (
        transactions.slice(0, 5).map((transaction, index) => (
          <Transaction key={index}>
            <Icon>{transaction.name.charAt(0)}</Icon>
            <Details>
              <p>{transaction.name}</p>
              <span>{new Date(transaction.createdAt).toLocaleDateString()}</span>
            </Details>
            <Amount>₦{transaction.amount.toLocaleString()}</Amount>
          </Transaction>
        ))
      ) : (
        <p>No recent payments found.</p>
      )}
    </Recents>
  );
};

export default RecentPayments;
