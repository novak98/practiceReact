import React from 'react';




const Row = ({item, onRowClick, onEdit, delEvent}) => (
    <tr onClick={onRowClick} className="row mainrow">
        <td className="tableCol">
            <p className="numbers">{item.name}</p>
        </td>
            <td className="tableCol">
            <p>{item.username}</p>
            </td>
            <td className="tableCol">
            <p className="numbers">{item.email}</p>
                </td>
                <td className="tableCol">
                    <p className="numbers">{item.address.street}</p>
                    </td>
                    <td className="tableCol">
                        <button className="btn1" onClick={(e) => {e.stopPropagation(); onEdit();}}>edit</button>
                        </td>
                        <td className="tableCol">
                            <button className="btn2" onClick={(e) => {e.stopPropagation(); delEvent(item.id)}}>delete</button>
                            </td>
                            </tr>  
);



export default Row;





// const renderCells = (items) => {
//     return items.map(item => {
//      const customCell = document.createElement("div")
//      customCell.setAttribute('class', 'col-lg-2')
//      const customCellP = document.createElement('p')
//       if (item.key !== "username") customCellP.setAttribute('class','numbers')
//      customCellP.textContent = item.value
//        customCell.appendChild(customCellP)
//        return customCell;
//     })
//   }