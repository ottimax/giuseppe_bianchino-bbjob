import React, { useEffect, useState } from 'react';
import './App.css';

//IMPORT LAYOUT COMPONENT
import Lg from './layout/Lg';
import Md from './layout/Md';
import Sm from './layout/Sm';
import Xs from './layout/Xs';

//IMPORT AND SET PROPERTIES OF THE PAGE FROM HOMEPAGE.JSON
const homepage = require('./homepage.json')
let meta = document.createElement('meta');

meta.title = homepage.pageStructure.title;
meta.setAttribute('keywords', homepage.pageStructure.keywords);
meta.setAttribute('title', homepage.pageStructure.metaTitle);
meta.setAttribute('description', homepage.pageStructure.metaDescription);
document.getElementsByTagName('head')[0].appendChild(meta);
document.title = homepage.pageStructure.title;

//GET LAYOUT FROM HOMEPAGE.JSON
const { lg, md, sm, xs } = homepage.pageStructure.layout;





function App() {

  //GET WIDTH AND HEIGHT OF THE SCREEN
  const [windowWidth, setWindowWidth] = useState(0);
  
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  console.log(windowWidth)

  return (
    <div >
      {windowWidth <= 320 && (<Xs xs={xs}></Xs>)}
      {windowWidth <= 768 && (<Sm sm={sm}></Sm>)}
      {windowWidth <= 1024 && (<Md md={md}></Md>)}
      {windowWidth > 1024 && (<Lg lg={lg}></Lg>)}
    </div>
  );
}

export default App;
