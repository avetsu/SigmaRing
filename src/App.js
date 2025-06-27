import "./App.css";
import FifthScreen from "./screens/FifthScreen";
import FirstScreen from "./screens/FirstScreen";
import FourthScreen from "./screens/FourthScreen";
import Header from "./screens/Header";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import SixthScreen from "./screens/SixthScreen";
import SeventhScreen from "./screens/SeventhScreen";
import Footer from "./screens/Footer";
import Modal from "./screens/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
      <SixthScreen />
      <SeventhScreen />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
