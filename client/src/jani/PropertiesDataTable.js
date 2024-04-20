import React, { useState } from 'react';

const PropertiesDataTable = ({ data }) => {
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
    <table className="table-responsive table-bordered" style={{border:'1px solid gray',textAlign:'center',width:'100%'}}>
      <thead>
        <tr  style={{fontStyle:'bold'}}>
          <th onClick={() => sortByColumn('id')} >Id</th>
          <th onClick={() => sortByColumn('name')}>Name</th>
          <th onClick={() => sortByColumn('location')} >Location</th>
          <th onClick={() => sortByColumn('type')} >type</th>
          <th onClick={() => sortByColumn('status')} >Status</th>
          <th colSpan={2}>Configurations</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index} >
            <td >{row.id}</td>
            <td >{row.name}</td>
            <td >{row.location}</td>
            <td >{row.type}</td>
            <td >{row.status}</td>
            <td ><center><button className='btn btn-block btn-success' style={{width:'80%'}}>View</button></center></td>
            <td ><center><button className='btn btn-block btn-danger' style={{width:'80%'}}>Delete</button></center></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertiesDataTable;
