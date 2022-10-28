import React from "react";
import Layout from "./components/Layout";
import Router from "./shared/Router";
// import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <Layout> */}
      <Router />
      {/* </Layout> */}
    </>
  );
}

export default App;
