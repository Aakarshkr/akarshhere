
import ParallaxComponent from './Components/Page1'; // Import the ParallaxComponent
import PageSecond from './Components/page2';
import PageThird from './Components/page3';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <ParallaxComponent />
      < PageSecond />
      <PageThird/>
    </div>
  );
}

export default App;
