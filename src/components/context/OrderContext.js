import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext({});

export const OrderContextProvider = (props) => {
  const [orderId, setOrderId] = useState(-1);
  const [orders, setOrders] = useState([]);
  const [orderSortModel, setOrderSortModel] = useState([
    {
      field: 'OrderId',
      sort: 'asc',
    },
  ]);
  const [orderFilterModel, setOrderFilterModel] = useState(
    {
      items: [
          {
              field: 'SaleTotal',
              operator: '>',
              value: '0.0'
          },
      ],
  });

  const [orderItemId, setOrderItemId] = useState(-1);
  const [orderItems, setOrderItems] = useState([]);
  const [orderItemSortModel, setOrderItemSortModel] = useState([
    {
      field: 'OrderLineItemId',
      sort: 'asc',
    },
  ]);
  const [orderItemFilterModel, setOrderItemFilterModel] = useState(  {
    items: [
        {
            field: 'PriceTotal',
            operator: '>',
            value: '100'
        },
    ],
});
  
  // const login = () => {
  //     setLoggedIn(true);
  //   };

  // const logout = () => {
  //   sleep(100).then(() => {
  //     setLoggedIn(false);
  //   });
  // };

  const OrderContextValue = {
    orderId,
    setOrderId,
    orders,
    setOrders,
    orderSortModel,
    setOrderSortModel,
    orderFilterModel,
    setOrderFilterModel,
    orderItemId,
    setOrderItemId,
    orderItems,
    setOrderItems,
    orderItemSortModel,
    setOrderItemSortModel,
    // orderItemFilterModel,
    // setOrderItemFilterModel,
  };

  return <OrderContext.Provider value={OrderContextValue} {...props} />;
};

export const useOrder = () => useContext(OrderContext);
