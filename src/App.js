import "./index.css";
import About from "./components/about/About";
import Header from "./components/header/Header";

export default function App() {
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <>
      <Header />
      <About />
    </>
  );
}
