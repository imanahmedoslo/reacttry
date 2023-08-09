import logo from './diary.svg';
import dropDown from './arrow.webp';
 import './App.css';

// import logo from './blueFlower.jpg'

function App() {
  return (
    <div className="  wrapper container h-screen m-auto  inline-grid grid-cols-4 grid-rows-6 md:grid-cols-5 lg:grid-cols-8 gap-4">
      <div className=" flex flex-row tile row-start-1 col-start-1 col-span-full self-center rounded justify-between">
        <img src={logo} alt='img.png' className=' h-9 w-9 ml-3'/>
        <div className=' text-lg font-bold'>My Little Blog</div>
        <img src={dropDown} alt='img.png' className=' h-10 w-10 mr-3 '/>

      </div>
      <div className="tile col-span-3 md:col-span-3 lg:col-span-3 row-span-3 md:row-span-3 lg:row-span-3 rounded">
        <h1 className="tile-marker">TWO</h1>
      </div>
      <div className="tile col-start-4 md:col-start-4 lg:col-start-4 row-start-2 md:row-start-2 row-span-3 lg:row-start-2 col-span-1 md:col-span-2 lg:col-span-full rounded">
        <h1 className="tile-marker">FOUR</h1>
      </div>
      <div className="tile col-start-4 md:col-start-5 lg:col-start-8 col-span-1 md:col-span-1 lg:col-span-1  row-start-1  row-span-2 mt-7 opacity-0 hover:opacity-100 rounded">
        <h1 className="tile-marker">THREE</h1>
      </div>
      
      <div className="tile row-start-6 col-span-full self-end rounded">
        <h1 className="tile-marker">FIVE</h1>
      </div>
    </div>
  );
}

export default App;
