import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Header from "./app/components/Header";
import Home from "./app/components/Home";
import Modal from "./app/components/Modal";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header />
        <Home />
        <Modal />
      </RecoilRoot>
    </div>
  );
}

export default App;
