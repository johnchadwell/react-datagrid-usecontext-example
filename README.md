# My Notes

React DataGrid UseContext Example

This blog will show how to use the React Context API to maintain state between parent and child DataGrids (Material MuiX) for row selection, filtering and sorting. I want to show filtering a child DataGrid by selecting a row in the parent DataGrid and retaining that selection using a React Context object. This should work with out of box filtering and sorting in the DataGrid. When you navigate away from the parent page and back to the same page the DataGrids should maintain their row selection, filtering and sorting.

This project is referenced in the blog http://jchadwellblog.com/?postid=2032&title=React-UseContext-DataGrid-Example

Clone the project locally by:
gti clone https://github.com/johnchadwell/react-datagrid-usecontext-example.git

After cloning this project run the following from a command window in the project directory:

npm install

npm start

"npm start" is configured to run on port 4001 in the package.json file.

"start": "SET PORT=4001 && react-scripts start",

