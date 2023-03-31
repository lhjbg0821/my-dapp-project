import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
commit 은 여러번 하고
배포할 때가 됐다 싶으면 push
*/
