import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import './style.css'

//IMPORT LAYOUT COMPONENT
import Layout from './layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';


function setMeta(homepage) {
  let meta = document.createElement('meta');
  meta.title = homepage.pageStructure.title;
  meta.setAttribute('keywords', homepage.pageStructure.keywords);
  meta.setAttribute('title', homepage.pageStructure.metaTitle);
  meta.setAttribute('description', homepage.pageStructure.metaDescription);
  document.getElementsByTagName('head')[0].appendChild(meta);
  document.title = homepage.pageStructure.title;
}

function App() {

  //IMPORT AND SET PROPERTIES OF THE PAGE FROM HOMEPAGE.JSON
  const [homepage, setHomepage] = useState();

  async function getHomepage() {
    await Axios.get("https://raw.githubusercontent.com/The-BB-s-Way/frontend-tests/master/homepage.json").
      then(res => { setHomepage(res.data); setMeta(res.data); }).
      catch(err => console.error(err));
  }

  useEffect(() => {
    getHomepage();
  }, []);

  return (
    <Container fluid className="app-container">
      {homepage && (<Layout lg={homepage.pageStructure.layout.lg}></Layout>)}
    </Container>
  );
}

export default App;
