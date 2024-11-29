import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage.tsx";
import FeedsLayout from "./layouts/FeedsLayout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <FeedsLayout>
              <HomePage />
            </FeedsLayout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
