// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">

      <Profile name="Zaman" lname="Rahimi"> 
        <h3>THis is a child of the profile component</h3>
      </Profile>

    </div>
  );
}

export default App;
