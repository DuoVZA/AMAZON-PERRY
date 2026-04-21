import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Header/Header";
// import Main from "./components/Main/Main"; // если нужно, добавь внутрь Layout

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}