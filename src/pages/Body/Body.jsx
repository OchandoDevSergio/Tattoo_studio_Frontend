import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";


export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
