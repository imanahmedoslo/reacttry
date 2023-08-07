//import logo from './logo.svg';
import './App.css';

import logo from './blueFlower.jpg'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div className="navBar"> velkommen tilbake</div>
        <div className='app-main'>
          <div className='space'></div>
        <img src={logo} className="App-logo"/>
        <p>
         Took you too long to open me and start again!
        </p>
        <p>I missed you...</p>
        </div>
       
        <div className="list">
            <p className="link"> click here</p>
            <p className="link"> click here</p>
            <p className="link"> click here</p>
            <p className="link"> click here</p>
           
          </div>
      </header>
    </div>
  );
}

export default App;
