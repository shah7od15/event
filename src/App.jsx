import './App.css'

function App() {
  const body=document.getElementsByTagName("body")[0];
  function a(rang){
    body.style.backgroundColor=rang;
  }
  return (
    <div className="container doda">
      <div className="ota">
       <div className="box" id="b1"></div>
       <h3>red body</h3>
      <button onClick={()=>a("red")}>buton</button>
      </div>
      <div className="ota2">
       <div className="box" id="b2"></div>
       <h3> yellow body</h3>
      <button onClick={()=>a("yellow")}>buton</button>
      </div>
      <div className="ota3">
       <div className="box" id="b3"></div>
       <h3>green body</h3>
      <button onClick={()=>a("green")}>buton</button>
      </div>
    </div>
  )
}

export default App
