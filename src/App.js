import "./styles.css";
import Carousel from "./Carousel";

export default function App() {
  // 1. TODO: Read through App.js, Carousel.js, and data.json
  return (
    <div className="App">
      <h1>
        Cat Carousel&nbsp;
        <span role="img" aria-label="Tabby Cat">
          🐈
        </span>
      </h1>
      <Carousel />
    </div>
  );
}
