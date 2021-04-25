import Navigation from "components/navigation/Navigation";
import Header from 'components/header/Header';
import Router from "./Router";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
