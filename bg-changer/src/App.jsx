import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("red")}
            style={{backgroundColor:"red"}}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("green")}
            style={{backgroundColor:"green"}}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("blue")}
            style={{backgroundColor:"blue"}}>BLue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("violet")}
            style={{backgroundColor:"violet"}}>violet</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("pink")}
            style={{backgroundColor:"pink"}}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("lightblue")}
            style={{backgroundColor:"lightblue"}}>Light Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={() => setColor("yellow")}
            style={{backgroundColor:"yellow"}}>Yellow</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
