import './App.css';
import Service_Component from './components/Service_Component';



function App() {
  return (
    <div className="App">
      <h1>Infotainment</h1>
      <div className="dashboard_container">
      <hr width="100%" size="2" style={{margin:'0px 100px'}} />
        <Service_Component />
      </div>
    </div>
  );
}

export default App;
