import React, { useState, useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary'
import { useErrorBoundary } from 'react-error-boundary'
import OrderListComponentMuiX1 from "../orders/OrderListComponentMuiX1";
import OrderItemListComponentMuiX1 from "../orderItems/OrderItemListComponentMuiX1";

const ErrorFallback = ({ error }) => (
  <div>
    <p>Orders page</p>
    <p>Something went wrong </p>
    {error.message && <span>Error: {error.message}</span>}
  </div>
);

const Orders = () => {

  return (
  <>

    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <OrderListComponentMuiX1/>
      <OrderItemListComponentMuiX1/>
  </ErrorBoundary>    
  </>
);

};

export default Orders;
