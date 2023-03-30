import PuppyLogo from "./images/puppy.png";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          {/* <div>HyunJin's PortFolio</div> */}
          <div>
            <img className="w-12" src={PuppyLogo} alt="Nike"></img>
          </div>
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          Hello, My Name is HyunJin. I am Programmer.
        </div>
      </main>
    </div>
  );
}

export default App;

/*
commit 은 여러번 하고
배포할 때가 됐다 싶으면 push
*/
