import Layout from './Components/shared/Layout'
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import  Login  from './Pages/Login';
import  Home  from './Pages/Home';
import  Transactions  from './Pages/Transactions';
import  Balance  from './Pages/Balance';
import  Reports  from './Pages/Reports';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={< Home/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/balance' element={<Balance/>} />
          <Route path='/reports' element={<Reports/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App