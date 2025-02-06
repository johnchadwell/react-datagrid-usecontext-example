
export async function GetOrders() {

      return fetch('/orders020325.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('OrderServices.GetOrders: Network response was not ok');
        }
          return response.json();
      })
      .then((result) => {
        console.log("OrderServices.GetOrders.result: " + JSON.stringify(result));
          return result;
      })
      .catch(error => {
        throw new Error("OrderServices.GetOrders: " + error.message);
      });
}

export async function GetOrderItemsFiltered(id) {

  console.log("OrderServices.GetOrderItemsFiltered.id: " + id);
      return fetch('/orderLineItems020325.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('OrderServices.GetOrderItemsFiltered: Network response was not ok');
        }
          return response.json();
      })
      .then((result) => {
        console.log("OrderServices.GetOrderItemsFiltered.fetch: " + JSON.stringify(result));
        if (id>-1) {
          result = result.filter(d => d.OrderId === id);
        return result;
        } else {
          return []; 
        }
      })
      .catch(error => {
        throw new Error("OrderServices.GetOrderItemsFiltered: " + error.message);
      });
}

