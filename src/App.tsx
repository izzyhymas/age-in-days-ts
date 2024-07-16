import "./App.css";

import Calculator from "./Calculator";

function App() {
  return (
    <>
      <header>
        <h1>Age in Days Calculator</h1>
        <p>
          Given your age, this app will tell you how many days you've lived.
        </p>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  );
}

export default App;
