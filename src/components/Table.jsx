import React from 'react';
import Row from '../components/Row';


const Table = ({data,onItemClick,onEditClick,delEvent}) => (
    <table className="table">
        <thead className="tableHead">
              <th  scope="col">
                <p>OCR / Fakturanummer</p>
              </th>
              <th  scope="col">
                <p>Beskriving</p>
              </th>
              <th  scope="col">
                <p>Forfallodatum</p>
              </th>
              <th  scope="col">
                <p>Belopp att betala</p>
              </th>
              <th  scope="col">
                <p>Status</p>
              </th>
              <th  scope="col">
                <p>Delete</p>
              </th>
        </thead>
        <tbody>
        {data.map(item => <Row item={item} onRowClick={() => onItemClick(item)} onEdit={() => onEditClick(item) } delEvent={delEvent}/>)}
        </tbody>
    </table>
);



export default Table;