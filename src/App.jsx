import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LandingPageLayout from "./layouts/LandingPageLayout";
import SignInAndSignUpLayout from "./layouts/SignInAndSignUpLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Services from "./components/Services";
import Promos from "./components/Promos";
import AdminLogin from "./components/AdminLogin";
import RoleSelector from "./components/RoleSelector";
import AdminHome from "./components/admin/AdminHome";
import CustomerProfile from "./components/CustomerProfile";
import Machine from "./components/admin/Machine";
import ReserveQueue from "./components/admin/ReserveQueue";
import Reservation from "./components/Reservation";
import ReservationStatus from "./components/ReservationStatus";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelector />} />

          <Route path="/landing" element={<LandingPageLayout />} />

          <Route path="/services" element={<Services />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/sign" element={<SignInAndSignUpLayout />}>
            <Route index element={<SignIn />} />
            <Route path="up" element={<SignUp />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/machine" element={<Machine />} />
          <Route path="/admin/reserve-queue" element={<ReserveQueue />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="/my-reservations" element={<ReservationStatus/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
