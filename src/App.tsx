import Header from "../components/header/Header";
import Router from "../Router";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="app__header--mainHeader">
        <Header />
      </header>

      <main>
        <Router />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
