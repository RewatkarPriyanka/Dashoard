import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    
    <div class="container-fluid" id="main">
    <div class="row row-offcanvas row-offcanvas-left"></div>

               
     <Navbar></Navbar>
     <Dashboard></Dashboard>
     
   
     </div>
    
  );
}

export default App;
