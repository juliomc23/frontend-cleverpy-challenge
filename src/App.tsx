import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="app__header--mainHeader">
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
