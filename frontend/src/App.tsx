import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage.tsx";
import FeedsLayout from "./layouts/FeedsLayout.tsx";
import LandingPageLayout from "./layouts/LandingPageLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";

function App() {
  return (
    <>
      <Routes>
      <Route
          path="/"
          element={
            <LandingPageLayout>
              <LandingPage />
            </LandingPageLayout>
          }
        />
        <Route
          path="/home"
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
