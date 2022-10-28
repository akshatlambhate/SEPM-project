import logo from './logo.svg';
import './App.css';
import Authentication from '../src/components/Authentication';
import SelectEvent from '../src/components/SelectEvent';
import ChooseCurrent from './components/ChooseCurrent';
import ManageCurrent from './components/ManageCurrent';

function App() {
  return (
    <div className="App">
      {/* <Authentication /> */}
      {/* <SelectEvent /> */}
      <ChooseCurrent />
      {/* <ManageCurrent /> */}
       
    </div>
  );
}

export default App;
