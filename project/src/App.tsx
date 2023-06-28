import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";
import KontaktPage from "./KontaktPage";
import AboutPage from "./About";
import LoginPage from "./Login";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/menu" element={<MenuItem />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
