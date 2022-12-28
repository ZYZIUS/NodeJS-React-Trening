import React from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: "zyzu"
      })
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>test {!data?'Loading...':data}</p>
      </header>
    </div>
  );
}

export default App;
