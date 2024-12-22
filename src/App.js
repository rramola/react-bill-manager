import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import CreateBill from './components/create_bill';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateBill />
    </div>
  );
}

export default App;
