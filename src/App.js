import './App.css';
import ServiceComponent from './components/ServiceComponent';
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';
import BottomNavBar from './components/BottomNavBar'



function App() {
  return (
    <div className="App">
      <h2>Civic, Accord, and CR-V Mock Infotainment Display</h2>
      <div className="dashboard_container">
      <TopNavBar/>
        <hr width="100%" size="2" style={{margin:'0px 100px'}} />
          <SideNavBar />
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
            <ServiceComponent />
          </div>
          <BottomNavBar />      
      </div>
    </div>
  );
}

export default App;
