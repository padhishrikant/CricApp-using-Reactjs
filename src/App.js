import './App.css';
import NavBar from '../src/Component/NavBar';
import TabComponent from '../src/Component/TabsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <TabComponent />
      </header>
    </div>
  );
}

export default App;
