import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Meetings from "./components/pages/Meetings";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto">
          <Route path="/gp-cevrimiciyiz/" exact component={Home} />
          <Route path="/gp-cevrimiciyiz/hakkimizda" exact component={About} />
          <Route path="/gp-cevrimiciyiz/etkinlikler" exact component={Meetings} />
        </div>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
