import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WalletCard from "./WalletCard";
import TransactionHistory from "./TransactionHistory";
import innerbg from "../../assets/png/innerbg.png";

const Bgcolor = styled.div`
  width: 100%;
  background-image: url(${innerbg});
  background-color: #edeff2;
  background-size: contain;
  background-position: top;
  height: auto;
`;

const Container = styled.div`
  max-width: 1280px;
  width: 85%;
  margin: auto;
  margin-top: 70px;
  padding: 30px 10px;
  min-height: calc(100vh - 70px);
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  padding-bottom: 40px;
`;

function Wallet() {
  const [transactions, setTransactions] = useState([]);

  // Mock data for wallet balance
  const storeData = {
    storeName: "QMart Stores",

    balance: 0, // Example balance

    


  // Mock API call for transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      // const mockData = [
      //   {
      //     bank: "Access Bank (*****7890)",
      //     date: "Nov 22nd, 18:40:26",
      //     amount: "₦30,000",
      //     status: "Completed",
      //   },
      //   {
      //     bank: "Access Bank (*****1234)",
      //     date: "Nov 23rd, 12:10:15",
      //     amount: "₦100,000",
      //     status: "Pending",
      //   },
      //   {
      //     bank: "GTBank (*****5678)",
      //     date: "Nov 24th, 15:30:45",
      //     amount: "₦50,000",
      //     status: "Failed",
      //   },
      //   {
      //     bank: "Zenith Bank (*****7890)",
      //     date: "Nov 25th, 10:00:00",
      //     amount: "₦40,000",
      //     status: "Completed",
      //   },
      //   {
      //     bank: "UBA (*****3456)",
      //     date: "Nov 26th, 14:20:00",
      //     amount: "₦60,000",
      //     status: "Pending",
      //   },
      //   {
      //     bank: "First Bank (*****9876)",
      //     date: "Nov 27th, 16:40:10",
      //     amount: "₦20,000",
      //     status: "Completed",
      //   },
      //   {
      //     bank: "EcoBank (*****6543)",
      //     date: "Nov 28th, 09:30:50",
      //     amount: "₦80,000",
      //     status: "Failed",
      //   },
      //   {
      //     bank: "Union Bank (*****1234)",
      //     date: "Nov 29th, 11:00:00",
      //     amount: "₦35,000",
      //     status: "Pending",
      //   },
      //   {
      //     bank: "Sterling Bank (*****4567)",
      //     date: "Nov 30th, 13:50:25",
      //     amount: "₦70,000",
      //     status: "Completed",
      //   },
      //   {
      //     bank: "Fidelity Bank (*****7890)",
      //     date: "Dec 1st, 10:10:10",
      //     amount: "₦25,000",
      //     status: "Completed",
      //   },
      // ];
      const mockData = [];
      setTransactions(mockData);
    };

    fetchTransactions();
  }, []);

  return (
    <Bgcolor>
      <Container>
        <Wrapper>
          <WalletCard balance={storeData.balance} />
          <TransactionHistory transactions={transactions.slice(0, 4)} />
        </Wrapper>
      </Container>
    </Bgcolor>
  );
}

export default Wallet;
