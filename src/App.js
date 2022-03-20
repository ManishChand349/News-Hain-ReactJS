import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 100;
  country = "us";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="sports"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="science"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="technology"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="general"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
