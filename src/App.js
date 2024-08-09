import './App.css';
import Service_Component from './components/Service_Component';
import Top_NavBar from './components/Top_NavBar';
import Side_NavBar from './components/Side_NavBar';
import Bottom_Nav_Bar from './components/Bottom_Nav_Bar';



function App() {
  return (
    <div className="App">
      <h2>Civic, Accord, and CR-V Mock Infotainment Display</h2>
      <div className="dashboard_container">
      <Top_NavBar/>
        <hr width="100%" size="2" style={{margin:'0px 100px'}} />
          <Side_NavBar />
          <div style={{ display:'flex',
                        flexDirection:'column',
                        width:'auto',
                        height:'auto',
                        margin:'0px 0px 100px 400px',
                        alignItems:'center',
                        alignContent:'center',
                        alignSelf:'center'
                      }}
          >
            <Service_Component />
          </div>
          <Bottom_Nav_Bar />      
      </div>
    </div>
  );
}

export default App;
