import "./App.css";
import Header from "../src/components/header";
import Table from "../src/components/Table";
import React, { useState, useEffect } from "react";
import MainContainer from "../src/components/MainContainer";
import RightSideBar from "./components/RightSideBar";
import { Container, Row, Col } from 'react-grid-system';
import LeftSideBar from "./components/LeftSideBar";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  console.log(editUser)
  const onUserEdit = (user) => {
    const updatedItems = items.map((item) => {
      if(item.id === user.id) {
        return user;
      }
      else {
        return item;
      }
    })
    setItems(updatedItems)
  }
 const deleteUser = (id,e) => {
  const filteredList = items.filter((item) => item.id !== id)
  setItems(filteredList)
  }


  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Row className="main-row">
  <Col xs={0.5} className="leftsidebar">
          <LeftSideBar/>
  </Col>
  <Col sm={11.5} className="page">
      <Header text="botello" />
    <Row className="main-row">
        <Col sm ={9} className="main-container">
      <MainContainer/>
      <Table data={items} onItemClick={(item) => {
        setCurrentUser(item);
        setEditUser(false);
        } 
         }
    onEditClick={(item) => {setCurrentUser(item); console.log(item); setEditUser(true)}}
    delEvent={deleteUser} />
      </Col>
      <Col sm={3} className="rightsidebar">
      {currentUser && <RightSideBar currentUser = {currentUser} editUser = {editUser} onUserEdit = {onUserEdit}/> }
      </Col>
      </Row>
  </Col>
    </Row>
  </div>
  );
};

export default App;
