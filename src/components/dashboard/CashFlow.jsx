import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 1rem;
    color: rgba(27, 99, 146, 1);
    cursor: pointer;
    span{
        color: rgba(27, 99, 146, 1) ;
    }
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Card = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.2);
  position: relative;

  p {
    font-size: 0.9rem;
    color: #888;
  }

  h2 {
    margin: 10px 0;
    font-size: 1rem;
    color: #6b5e5e;
    
  }

  span {
    font-size: 0.8rem;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 15px;

    h2 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
  height: 8px;
  margin: 10px 0;
`;

const Progress = styled.div`
  height: 100%;
  background: rgba(27, 99, 146, 1);
  width: ${(props) => props.width};
`;


const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.2);
  z-index: 1;
  max-height: 150px; 
  overflow-y: auto; /* Enables scrolling inside the dropdown */
`;

const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;
  &:hover {
    background: #f4f4f4;
  }
`;

const CashFlow = ({
  paymentReceived,
  amountWithdrawn,
  selectedMonthReceived,
  setSelectedMonthReceived,
  selectedMonthWithdrawn,
  setSelectedMonthWithdrawn,
}) => {
  const [showMonthDropdownReceived, setShowMonthDropdownReceived] =
    useState(false);
  const [showMonthDropdownWithdrawn, setShowMonthDropdownWithdrawn] =
    useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const toggleMonthDropdownReceived = () => {
    setShowMonthDropdownReceived(!showMonthDropdownReceived);
    if (showMonthDropdownWithdrawn) setShowMonthDropdownWithdrawn(false); // Close dropdown for Withdrawn card
  };

  const toggleMonthDropdownWithdrawn = () => {
    setShowMonthDropdownWithdrawn(!showMonthDropdownWithdrawn);
    if (showMonthDropdownReceived) setShowMonthDropdownReceived(false); // Close dropdown for Received card
  };

  const handleMonthSelectReceived = (month) => {
    setSelectedMonthReceived(month);
    setShowMonthDropdownReceived(false);
  };

  const handleMonthSelectWithdrawn = (month) => {
    setSelectedMonthWithdrawn(month);
    setShowMonthDropdownWithdrawn(false);
  };

  return (
    <Section>
      <Card>
        <h3 onClick={toggleMonthDropdownReceived}>{selectedMonthReceived} <span>▼</span></h3>
        <p>Payment Received</p>
        <h2>₦{paymentReceived.toLocaleString()}</h2>
        <ProgressBar>
          <Progress width="100%" />
        </ProgressBar>
        <p>Check payment history to view inflow</p>
        {showMonthDropdownReceived && (
          <Dropdown>
            {months.map((month) => (
              <DropdownOption
                key={month}
                onClick={() => handleMonthSelectReceived(month)}
              >
                {month}
              </DropdownOption>
            ))}
          </Dropdown>
        )}
      </Card>
      <Card>
        <h3 onClick={toggleMonthDropdownWithdrawn}>
          {selectedMonthWithdrawn} <span>▼</span>
        </h3>
        <p>Amount Withdrawn</p>
        <h2>₦{amountWithdrawn.toLocaleString()}</h2>
        <ProgressBar>
          <Progress width="100%" />
        </ProgressBar>
        <p>Check wallet to view withdrawal history</p>
        {showMonthDropdownWithdrawn && (
          <Dropdown>
            {months.map((month) => (
              <DropdownOption
                key={month}
                onClick={() => handleMonthSelectWithdrawn(month)}
              >
                {month}
              </DropdownOption>
            ))}
          </Dropdown>
        )}
      </Card>
    </Section>
  );
};

export default CashFlow;


