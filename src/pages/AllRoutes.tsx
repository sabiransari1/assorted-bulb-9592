import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Support } from "./Support";
import { Housing } from "./Housing";
import { Community } from "./Community";
import { Places } from "./Places";
import { Booking } from "../components/Booking";
import { BookingPreview } from "../components/BookingPreview";
import { PageNotFound } from "./PageNotFound";
import SignUp from "./SignUp";
import { Login } from "./Login";
import { Fav } from "./Fav";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/support"} element={<Support />} />
      <Route path={"/housing"} element={<Housing />} />
      <Route path={"/community"} element={<Community />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/fav"} element={<Fav />} />
      <Route path={"/places"} element={<Places />} />
      <Route path={"/booking/:id"} element={<Booking />} />
      <Route path={"/bookingpreview"} element={<BookingPreview />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
