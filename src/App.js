import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignupPage from './routes/SignupPage';
import SigninPage from './routes/SigninPage';

function App() {
  return (
    <div className="App bg-blue-600 p-0 m-0">
      <Routes>
        <Route path='SignUp' index element={<SignupPage/>}/>
        <Route path='signIn' element={<SigninPage/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
