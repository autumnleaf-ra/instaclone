import Body from "./components/Body";
import Header from "./components/Header";
import Picture from "./assets/1.jpg";

function App() {
  return (
    <>
      <Header />
      <Body Picture={Picture} />
    </>
  );
}

export default App;
