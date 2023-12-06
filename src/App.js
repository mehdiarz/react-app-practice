import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Button from './components/ButtonComp/Button';

function App() {
  return (
    <div className="App">
        <Welcome name = "mehhdi"/>
        <p>hello</p>
        <div>
          <Button />
        </div>
    </div>
  );
}

export default App;
