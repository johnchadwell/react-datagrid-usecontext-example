import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {GetOrderItemsFiltered} from "../services/orderServices";
import { useErrorBoundary } from 'react-error-boundary'
import {useOrder} from "../context/OrderContext"


const OrderItemListComponentMuiX1 = (props) => {

  const {orderId, orderItemId, setOrderItemId, orderItems, setOrderItems, orderItemSortModel, setOrderItemSortModel} = useOrder();
  
  const { showBoundary } = useErrorBoundary();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);  

  const columns = [
    { field: 'OrderLineItemId', headerName: 'OrderLineItemId', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'OrderId', headerName: 'OrderId', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'ProductId', headerName: 'ProductId', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'Quantity', headerName: 'Quantity', type: 'number', width: 180,  align: 'left', headerAlign: 'left', editable: false, },
    { field: 'PriceTotal', headerName: 'PriceTotal', type: 'number', width: 180, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'Status', headerName: 'Status', type: 'string', width: 80, align: 'left', headerAlign: 'left', editable: false, },
    { field: 'OrderLineItemStatusId', headerName: 'StatusId', type: 'string', width: 80, align: 'left', headerAlign: 'left', editable: false, },
];


  useEffect(() => {
    console.log("useEffect.OrderItems.fetchOrderItems.orderId: " + orderId);
    const fetchOrderItems = async() => {
      try {
        const d = await GetOrderItemsFiltered(orderId)
        setOrderItems(d);
        } catch (error) {
          showBoundary(error);
        }
    };
    fetchOrderItems();

  }, [orderId]);

  useEffect(() => {
     console.log("useEffect.OrderItems.setSelectionModel.orderItemId: " + orderItemId);;
    if (orderItems != null) {
      if (orderItems.length > 0 && orderItemId > -1) {
        const s = orderItems.filter((r) => r.OrderLineItemId === orderItemId).map((r) => r.OrderLineItemId);
        setSelectionModel(s);
        const selectedIDs = new Set(s);
        const selectedRows = orderItems.filter((r) => selectedIDs.has(r.OrderLineItemId));
        setSelectedRows(selectedRows);
  }
    }
  }, [orderItems, orderItemId]);

  const handleRowClick = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
   ) => {
    console.log("OrderItems.handleRowClick.params.id: " + params.id);
    setOrderItemId(params.id);

  };  

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
      <h1>Order Item List Component MuiX DataGrid</h1>
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
        rows={orderItems}
        columns={columns}
        editMode="row"
        getRowId={(row) => row.OrderLineItemId}
        onRowClick={handleRowClick}
        rowSelectionModel={selectionModel} // version 6
        onRowSelectionModelChange={(e) => {
          setSelectionModel(e);
          const selectedIDs = new Set(e);
          if (orderItems!=null) {
            const selectedRows = orderItems.filter((r) => selectedIDs.has(r.orderLineItemId));
            setSelectedRows(selectedRows);
          }
        }}
        sortModel={orderItemSortModel}

        onSortModelChange={(model) => setOrderItemSortModel(model)}

        sx={{
          
          '& .MuiDataGrid-filler': {
            backgroundColor: 'primary.light',
          },

          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'primary.light',
            Color: 'dataGrid.columnHeaderColor',
          },

          '& .MuiDataGrid-selectedRowCount': {
            backgroundColor: 'primary.light',
            Color: 'dataGrid.columnHeaderColor',
          },

          '& .MuiDataGrid-row': {
            backgroundColor: 'primary.superlight',
            color: 'dataGrid.rowColor',
          },

          // // this works - use standard css for hover
          // "& .MuiDataGrid-row:hover": {
          //   backgroundColor: 'primary.main',
          //   color: 'primary.contrast',
          // },

          // https://mui.com/material-ui/customization/how-to-customize/
          // 'Mui-selected' is one of the global class names listed
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'primary.contrast',
          },

          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'primary.light',
            color: 'primary.contrast',
            
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

export default OrderItemListComponentMuiX1;