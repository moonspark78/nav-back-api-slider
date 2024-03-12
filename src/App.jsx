import './App.css';
import { Api } from './Components/Api';
import { Background } from './Components/Background';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Api/>
    </div>
  );
}

export default App;
