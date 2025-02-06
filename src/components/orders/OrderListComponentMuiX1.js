import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {GetOrders} from "../services/orderServices";
import { useErrorBoundary } from 'react-error-boundary'
import {useOrder} from "../context/OrderContext"

const OrderListComponentMuiX1 = ({ sendRowSelectedToParent }) => {

  const {orderId, setOrderId, orderItemId, setOrderItemId, orders, setOrders, orderSortModel, setOrderSortModel, orderFilterModel, setOrderFilterModel} = useOrder();
  const { showBoundary } = useErrorBoundary(); 
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);  

  useEffect(() => {
    console.log("useEffect.Orders.fetchOrders.orders.length: " + orders.length);;
    const fetchOrders = async() => {
      try {
        if (orders.length==0) {

          const d = await GetOrders()
          console.log("Orders.fetchOrders.length: " + d.length);
          setOrders(d);
        }
      } catch (error) {
        showBoundary(error);
      }
    };
    fetchOrders();

  }, []);


  useEffect(() => {
    console.log("useEffect.Orders.setSelectionModel.orders.length: " + orders.length);
    console.log("useEffect.Orders.setSelectionModel.orderId: " + orderId);
    if (orders.length > 0 && orderId > -1) {
      const s = orders.filter((r) => r.OrderId === orderId).map((r) => r.OrderId);
      setSelectionModel(s);
      const selectedIDs = new Set(s);
      const selectedRows = orders.filter((r) => selectedIDs.has(r.OrderId));
      setSelectedRows(selectedRows);
    }
  }, [orders, orderId]);


  const handleRowClick = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log("Orders.handleRowClick.params.id: " + params.id)
    //sendRowSelectedToParent(params.id);
    setOrderId(params.id);
  };  

  const columns = [
    { field: 'OrderId', headerName: 'OrderId', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'CustomerId', headerName: 'CustomerId', type: 'number',  width: 80,  align: 'left', headerAlign: 'left', editable: false, },
    { field: 'OrderStatusId', headerName: 'StatusId', type: 'string', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'Status', headerName: 'Status', type: 'string', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'OrderDate', headerName: 'OrderDate', type: 'string', width: 180, editable: false, valueGetter: (value) => value && new Date(value),},
    { field: 'ShippingDate', headerName: 'ShippingDate', type: 'string', width: 180, editable: false, valueGetter: (value) => value && new Date(value),},
    { field: 'DeliveryDate', headerName: 'DeliveryDate', type: 'string', width: 180, editable: false, valueGetter: (value) => value && new Date(value),},
    { field: 'SaleTotal', headerName: 'SaleTotal', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false, },
  ];

  // console.log("orders: " + JSON.stringify(orders));
  // //console.log("myOrders: " + JSON.stringify(myOrders));

 
  return (
    <>
    <Box 
      sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      padding: 1,

      }}
    >

    <h1>Order List Component MuiX DataGrid</h1>
    </Box>

    <Box
      sx={{
        height: 500,
        width: '90%',
        margin: 'auto',
        border: 2,
        borderColor: 'primary.dark',

      }}
    >

      <DataGrid
        rows={orders}
        columns={columns}
        editMode="row"
        getRowId={(row) => row.OrderId}
        onRowClick={handleRowClick}

        rowSelectionModel={selectionModel} // version 6
        onRowSelectionModelChange={(e) => {
          setSelectionModel(e);
          const selectedIDs = new Set(e);
          if (orders.length>0) {
            const selectedRows = orders.filter((r) => selectedIDs.has(r.orderId));
            setSelectedRows(selectedRows);
          }
        }}

        sortModel={orderSortModel}
        onSortModelChange={(model) => setOrderSortModel(model)}
        filterModel={orderFilterModel}
        onFilterModelChange={(newFilterModel) => setOrderFilterModel(newFilterModel)}

        sx={{
          
          '& .MuiDataGrid-filler': {
            backgroundColor: 'primary.light',
          },

          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'primary.light',
          },

          '& .MuiDataGrid-selectedRowCount': {
            backgroundColor: 'primary.light',
          },

          '& .MuiDataGrid-row': {
            backgroundColor: 'primary.superlight',
          },


          // https://mui.com/material-ui/customization/how-to-customize/
          // 'Mui-selected' is one of the global class names listed
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'primary.main',
          },

          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'primary.light',
            
          },

          
        }}

      />
    </Box>
    <div style={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      }}
>
    <pre>{JSON.stringify(selectedRows)}</pre>
    <pre>{JSON.stringify(selectionModel)}</pre>
    </div>

    </>
  );
}

export default OrderListComponentMuiX1;