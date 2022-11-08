import Header from "../components/header/Header";
import Router from "../Router";
import Footer from "../components/footer/Footer";

import "./root.css";
function App() {
  return (
    <div className="App">
      <header className="app__header--mainHeader">
        <Header />
      </header>

      <main className="app__main--Main">
        <Router />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
