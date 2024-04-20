import React, { useState } from 'react';

const PropertiesDataTable = () => {
  const data=[
    {
      id:'#0001',
      name:'vivo',
      date:'26/04/2020',
      customer:'jani',
      product:'moile',
      location:'sattenapalle,522403,Ap',
      price:'$512',
      type:'electronic',
      agent:'thamos',
      status:'pending',
    }
    
    ];


  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState({ column: null, order: 'asc' });

  const sortByColumn = (column) => {
    let newData = [...sortedData];
    if (sortOrder.column === column) {
      newData.reverse();
      setSortOrder({ column, order: sortOrder.order === 'asc' ? 'desc' : 'asc' });
    } else {
      newData.sort((a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      });
      setSortOrder({ column, order: 'asc' });
    }
    setSortedData(newData);
  };



  return (
   <div className='col-xl-12'>
    <div className='table-responsive fs-14'>
     <table className="table display mb-4  overflow-hidden card-table text-center">
      <thead>
        <tr>
          <th onClick={() => sortByColumn('id')} >Id</th>
          <th onClick={() => sortByColumn('name')}>Name</th>
          <th onClick={() => sortByColumn('date')} >Date</th>
          <th onClick={() => sortByColumn('customer')} >Customer</th>
          <th onClick={() => sortByColumn('product')} >Product</th>
          <th onClick={() => sortByColumn('location')} >Location</th>
          <th onClick={() => sortByColumn('type')} >type</th>
          <th onClick={() => sortByColumn('agent')} >Agent</th>
          <th onClick={() => sortByColumn('status')} >Status</th>
          <th colSpan={2}>Configurations</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index} >
            <td >{row.id}</td>
            <td >{row.name}</td>
            <td >{row.date}</td>
            <td >{row.customer}</td>
            <td >{row.product}</td>

            <td >{row.location}</td>
            <td >{row.type}</td>
            <td >{row.agent}</td>
            <td >{row.status}</td>
            <td ><center><button className='btn  btn-success'>View</button></center></td>
            <td ><center><button className='btn btn-danger'>Delete</button></center></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>   
  );
};

export default PropertiesDataTable;
