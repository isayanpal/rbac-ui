import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<UserManagement/>} />
          <Route path='/roles' element={<RoleManagement/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
