import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CardPage, HomePage } from "../pages";
import ShopHeader from "../shop-header/ShopHeader";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={200} />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/card" element={<CardPage />}></Route>
      </Routes>
    </main>
  );
};

export default App;
