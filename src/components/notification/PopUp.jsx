import { io } from 'socket.io-client';

const socket = io('http://localhost:2230');

socket.on('transaction', (data) => {
  console.log('Transaction Notification:', data);

  // Example: Display notification on the page
  const notification = document.createElement('div');
  notification.innerHTML = `
    <p>${data.message}</p>
    <p>Name: ${data.name}</p>
    <p>Wallet Number: ${data.walletNumber}</p>
    <p>Amount: ${data.amount}</p>
    <p>New Balance: ${data.balance}</p>
  `;
  document.body.appendChild(notification);
});
