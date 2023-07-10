import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import Footer from'./Components/Footer'
import SignUp from './Components/SignUp';
// import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
<Route path="/" element={<h1>Product Listing Component</h1>}/>
<Route path="/add" element={<h1>Add Product Component</h1>}/>
<Route path="/update" element={<h1>Update Product Component</h1>}/>
<Route path="/logout" element={<h1>Logout Component</h1>}/>
<Route path="/profile" element={<h1>Profile Component</h1>}/>
<Route path="/signup" element={<SignUp />}/>
        </Routes>
        {/* <h1>E-Dashboard</h1> */}
        {/* <button onClick= {()=>setCount(count +1)}>Update counter</button> */}
      </BrowserRouter>
      <Footer/>
    </div >
  );
}
export default App;