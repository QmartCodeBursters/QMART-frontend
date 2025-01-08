import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Extend = () => {
  const { orderId } = useParams();
  const decodedOrderId = decodeURIComponent(orderId);  

  const ordersData = {
    '#1521': {
      orderId: '#1521',
      name: 'John Doe',
      date: '9 January, 2023',
      total: '#200.00',
      status: 'Processing',
      items: [
        { item: 'Product A', quantity: 2, price: '#50.00' },
        { item: 'Product B', quantity: 1, price: '#100.00' }
      ],
      shippingAddress: '123 Main St, City, Country',
      paymentMethod: 'Credit Card'
    },
    '#5829': {
      orderId: '#5829',
      name: 'Abraham Lincon',
      date: '15 February, 2023',
      total: '#120.00',
      status: 'On the Way',
      items: [
        { item: 'Product C', quantity: 3, price: '#40.00' }
      ],
      shippingAddress: '456 Elm St, City, Country',
      paymentMethod: 'PayPal'
    },
    '#3010': {
      orderId: '#3010',
      name: 'Alice Wonderland',
      date: '25 January, 2023',
      total: '#300.00',
      status: 'Processing',
      items: [
        { item: 'Product D', quantity: 2, price: '#75.00' },
        { item: 'Product E', quantity: 1, price: '#150.00' }
      ],
      shippingAddress: '789 Oak St, City, Country',
      paymentMethod: 'Credit Card'
    },
    '#1150': {
      orderId: '#1150',
      name: 'Mark Twain',
      date: '28 January, 2023',
      total: '#500.00',
      status: 'Shipped',
      items: [
        { item: 'Product F', quantity: 1, price: '#100.00' }
      ],
      shippingAddress: '101 Pine St, City, Country',
      paymentMethod: 'PayPal'
    },
    '#6743': {
      orderId: '#6743',
      name: 'Elon Musk',
      date: '1 February, 2023',
      total: '#800.00',
      status: 'On the Way',
      items: [
        { item: 'Product G', quantity: 1, price: '#200.00' }
      ],
      shippingAddress: '202 Maple St, City, Country',
      paymentMethod: 'Credit Card'
    },
    '#4295': {
      orderId: '#4295',
      name: 'Tiny Tom',
      date: '3 February, 2023',
      total: '#75.00',
      status: 'Completed',
      items: [
        { item: 'Product H', quantity: 1, price: '#25.00' }
      ],
      shippingAddress: '303 Cedar St, City, Country',
      paymentMethod: 'PayPal'
    },
    '#3024': {
      orderId: '#3024',
      name: 'Yogi Berra',
      date: '9 February, 2023',
      total: '#650.00',
      status: 'Completed',
      items: [
        { item: 'Product I', quantity: 2, price: '#50.00' },
        { item: 'Product J', quantity: 1, price: '#100.00' }
      ],
      shippingAddress: '404 Oak St, City, Country',
      paymentMethod: 'Credit Card'
    },
    '#7532': {
      orderId: '#7532',
      name: 'Marie Curie',
      date: '5 February, 2023',
      total: '#240.00',
      status: 'Shipped',
      items: [
        { item: 'Product K', quantity: 1, price: '#40.00' }
      ],
      shippingAddress: '505 Pine St, City, Country',
      paymentMethod: 'PayPal'
    },
    '#1142': {
      orderId: '#1142',
      name: 'Albert Einstein',
      date: '10 February, 2023',
      total: '#700.00',
      status: 'Completed',
      items: [
        { item: 'Product L', quantity: 1, price: '#350.00' }
      ],
      shippingAddress: '606 Cedar St, City, Country',
      paymentMethod: 'Credit Card'
    },
    '#5682': {
      orderId: '#5682',
      name: 'Julius Caesar',
      date: '13 February, 2023',
      total: '#380.00',
      status: 'On the Way',
      items: [
        { item: 'Product M', quantity: 2, price: '#75.00' },
        { item: 'Product N', quantity: 1, price: '#150.00' }
      ],
      shippingAddress: '707 Oak St, City, Country',
      paymentMethod: 'PayPal'
    },
  };

  
  const order = ordersData[decodedOrderId];

  if (!order) {
    return <p>Order not found!</p>;
  }

  return (
    <Wrapper>
      <OrderDetailsContainer>
        <h2>Order Details - {order.orderId}</h2>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Total:</strong> {order.total}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <h3>Items:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.item} - Quantity: {item.quantity} - Price: {item.price}
            </li>
          ))}
        </ul>
        <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      </OrderDetailsContainer>
    </Wrapper>
  );
};

export default Extend;

const Wrapper = styled.div`
  padding: 100px;
`;

const OrderDetailsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;
