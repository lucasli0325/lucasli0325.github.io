import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Blog1 from "./components/Blogs/WhyDidISwitchToTechIndustry";
import Blog2 from "./components/Blogs/SystemDesignInterview";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>(
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog"  component={Projects} />
            <Route path ="/blogs/WhyDidISwitchToTechIndustry" component={Blog1}/>
            <Route path ="/blogs/SystemDesignInterview" component={Blog2}/>
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
