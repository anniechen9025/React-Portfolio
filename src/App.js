import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
