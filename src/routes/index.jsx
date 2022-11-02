import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
