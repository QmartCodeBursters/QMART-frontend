// import styled from "styled-components";

// const Text = styled.div``;

// const Transact = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 17px;
//   @media (max-width: 800px) {
//     margin-top: 15px;
//   }
// `;

// const Transaction = styled.div`
//   margin-top: 10px;
//   padding: 5px;
//   hr {
//     background-color: black;
//     height: 1px;
//     border: none;
//     width: 100%;
//   }
// `;

// const Transfer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 5px 0;
//   padding: 10px 5px;
//   width: 80%;
//   font-size: 13px;
//   div {
//     h4 {
//       margin-bottom: 4px;
//     }
//   }
// `;

// const View = styled.p`
//   color: #747070cc;
//   font-size: 12px;
// `;

// function TransactionHistory() {
//   return (
//     <Text>
//       <Transact>
//         <p>Withdrawal History</p>
//         <View>View all</View>
//       </Transact>
//       <Transaction>
//         <Transfer>
//           <div>
//             <h4>Withdraw to Access Bank(*****7890)</h4>
//             <p>Nov 22nd, 18:40:26</p>
//           </div>
//           <div>
//             <p> ₦30,000</p>
//           </div>
//         </Transfer>
//         <hr />
//         <Transfer>
//           <div>
//             <h4>Withdraw to Access Bank(*****7890)</h4>
//             <p>Nov 22nd, 18:40:26</p>
//           </div>
//           <div>
//             <p> ₦100,000</p>
//           </div>
//         </Transfer>
//         <hr />
//         <Transfer>
//           <div>
//             <h4>Withdraw to Access Bank(*****7890)</h4>
//             <p>Nov 22nd, 18:40:26</p>
//           </div>
//           <div>
//             <p> ₦30,000</p>
//           </div>
//         </Transfer>
//         <hr />
//         <Transfer>
//           <div>
//             <h4>Withdraw to Access Bank(*****7890)</h4>
//             <p>Nov 22nd, 18:40:26</p>
//           </div>
//           <div>
//             <p> ₦30,000</p>
//           </div>
//         </Transfer>
//       </Transaction>
//     </Text>
//   );
// }

// export default TransactionHistory;






// import React from "react";
// import styled from "styled-components";

// const Text = styled.div``;

// const Transact = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 17px;
//   @media (max-width: 800px) {
//     margin-top: 15px;
//   }
// `;

// const Transaction = styled.div`
//   margin-top: 10px;
//   padding: 5px;
//   hr {
//     background-color: black;
//     height: 1px;
//     border: none;
//     width: 100%;
//   }
// `;

// const Transfer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 5px 0;
//   padding: 10px 5px;
//   width: 80%;
//   font-size: 13px;
//   div {
//     h4 {
//       margin-bottom: 4px;
//     }
//   }
// `;

// const Status = styled.p`
//   font-size: 12px;
//   font-weight: bold;
//   color: ${(props) =>
//     props.status === "Completed"
//       ? "green"
//       : props.status === "Pending"
//       ? "orange"
//       : "red"};
// `;

// const ViewLink = styled.a`
//   color: #747070cc;
//   font-size: 12px;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// function TransactionHistory({ transactions }) {
//   return (
//     <Text>
//       <Transact>
//         <p>Withdrawal History</p>
//         <ViewLink href="/withdrawalhistory">View all</ViewLink>
//       </Transact>
//       <Transaction>
//         {transactions.map((transaction, index) => (
//           <React.Fragment key={index}>
//             <Transfer>
//               <div>
//                 <Status status={transaction.status}>{transaction.status}</Status>
//                 <h4>Withdraw to {transaction.bank}</h4>
//                 <p>{transaction.date}</p>
//               </div>
//               <div>
//                 <p>{transaction.amount}</p>
//               </div>
//             </Transfer>
//             <hr />
//           </React.Fragment>
//         ))}
//       </Transaction>
//     </Text>
//   );
// }

// export default TransactionHistory;





import React from "react";
import styled from "styled-components";

const Text = styled.div``;

const Transact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;

  @media (max-width: 800px) {
    margin-top: 15px;
    flex-wrap: wrap;
  }
`;

const Transaction = styled.div`
  margin-top: 10px;
  padding: 5px;

  hr {
    background-color: black;
    height: 1px;
    border: none;
    width: 100%;
  }
`;

const Transfer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px 5px;
  width: 80%;
  font-size: 13px;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */

  @media (max-width: 600px) {
    width: 70%; /* Full width for smaller screens */
    padding: 10px 0;
  }

  div {
    h4 {
      margin-bottom: 4px;
    }

    p {
      margin: 0; /* Ensures consistency in smaller layouts */
    }
  }
`;

const Status = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) =>
    props.status === "Completed"
      ? "green"
      : props.status === "Pending"
      ? "orange"
      : "red"};
`;

const ViewLink = styled.a`
  color: #747070cc;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 11px; /* Adjust link size for smaller screens */
  }
`;

function TransactionHistory({ transactions }) {
  return (
    <Text>
      <Transact>
        <p>Withdrawal History</p>
        <ViewLink href="/withdrawalhistory">View all</ViewLink>
      </Transact>
      <Transaction>
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <Transfer>
              <div>
                <Status status={transaction.status}>{transaction.status}</Status>
                <h4>Withdraw to {transaction.bank}</h4>
                <p>{transaction.date}</p>
              </div>
              <div>
                <p>{transaction.amount}</p>
              </div>
            </Transfer>
            <hr />
          </React.Fragment>
        ))}
      </Transaction>
    </Text>
  );
}

export default TransactionHistory;




