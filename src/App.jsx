import Header from "./components/Header";
import GettingStarted from "./components/Sections/GettingStarted";
import Hero from "./components/Sections/Hero";
import Services from "./components/Sections/Services";
import Why from "./components/Sections/Why";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Services />
        <GettingStarted />
      </main>
    </>
  );
}

export default App;
