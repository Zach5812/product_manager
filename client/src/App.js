import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products/new">Create a Product</Link>
      </p>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/products/new" element={<CreatePage/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/products/:id/edit" element={<UpdatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
