import React, {useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RightSideBar = ({currentUser,editUser,onUserEdit}) =>{
  const [user, setUser] = useState(currentUser)
  const updateValue = (e) => {
      const id = e.target.id;
      const value = e.target.value;
      if(Object.keys(user.address).includes(id)) {
        setUser({...user, address:{...user.address,[id]: value}})
      }
      else if (['bs'].includes(id))
      setUser({...user, company:{...user.company,[id]: value}})
      else setUser({...user, [id]: value})
    
  }
  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

const onSaveClick = () => {
  if (editUser) {
    onUserEdit(user)
  }
}


  return  (
    <Container className="rightsidebar"> 
      <div className="row right">
        <h4 className="h4Billing">Billing information</h4>
        <h4 className="rightp2">Inte betalad</h4>
      </div>
    <div className="row right">
    <label htmlFor="email">Invoice Number:</label>
       <input type="text" id="username" className="numbers rightInput" value={user.username}  onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right">
    <label htmlFor="email">Invoice Date:</label>
       <input type="text"id="email" className="numbers rightInput" value={user.email}  onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right">
    <label htmlFor="email">Payment Period:</label>
       <input type="text" id="street" className="numbers rightInput" value={user.address.street} onChange={(updateValue)} disabled = {!editUser}/>
       </div>
    <div className="row right">
    <label htmlFor="email">Customer ID:</label>
       <input type="text" id="phone" className="numbers rightInput" value={user.phone} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right2">
      <div className="col-lg-6">
        <h4 className="h4Billing">Billing Address</h4>
      </div>
    </div>
    <div className="row right">
    <label htmlFor="email">Name:</label>
       <input type="text" id="name" className="numbers rightInput" value={user.name} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right">
    <label htmlFor="email">Address:</label>
       <input type="text" id="suite" className="numbers rightInput" value={user.address.suite} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right">
    <label htmlFor="email">Zip:</label>
       <input type="text" id="zipcode" className="numbers rightInput" value={user.address.zipcode} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right2">
      <div className="col-lg-6">
        <h4 className="h4Billing">Invoice Details</h4>
      </div>
    </div>
    <div className="row right">
    <label htmlFor="email">Service/Product</label>
       <input type="text" id="bs" className="numbers rightInput" value={user.company.bs} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right">
    <label htmlFor="email">Quantity:</label>
       <input type="text" id="website" className="numbers rightInput" value={user.website} onChange={(updateValue)} disabled = {!editUser}/>
    </div>
    <div className="row right" >
      <div className="rightp1">
        <p className="rightp1">Total:</p>
      </div>
      <div className="rightp">
        <p className="rightp">10.0000 SEK</p>
      </div>
    </div>
    <div className="container rightbot">
      <div className="row" >
        <div className="col-12">
        <div className="bottom-right-icon">
      <FontAwesomeIcon icon={faAdjust} size={"2x"} />
      </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>1234466 285728 00#</h4>
        </div>
      </div>
      <div className="row" > 
        <div className="col-12">
          <p className="saveButtonText">Skanna numret for att fylla fakturan automatiskt</p>
        </div>
      </div>
    </div>
    <Container className="saveButtonContainer">
      <button className="btn3" onClick={onSaveClick}> Ladda ner faktura</button>
    </Container>
  </Container>
)
}

export default RightSideBar;