import React  from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx';
import Main from './Pages/Main.jsx'
function App() {
  return (
    <div>
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
