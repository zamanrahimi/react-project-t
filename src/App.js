// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
import Message from './components/Message';
import Hello from './components/Hello';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalCOmponet from './components/ConditionalComponent';
import Products from './components/Products';
import Form from './components/Form';
import { Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Form/>}> </Route>
      <Route path="hello" element={<Hello/>}></Route>
    </Routes>
    </>
  );
}

export default App;
