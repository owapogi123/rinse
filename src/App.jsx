import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPageLayout from "./layouts/LandingPageLayout";
import SignInAndSignUpLayout from "./layouts/SignInAndSignUpLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Sidebar from './components/Sidebar';
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="sign" element={<SignInAndSignUpLayout />}>
            <Route index element={<SignIn />} />
            <Route path="up" element={<SignUp />} />
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
