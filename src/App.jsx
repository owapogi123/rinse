import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LandingPageLayout from "./layouts/LandingPageLayout";
import SignInAndSignUpLayout from "./layouts/SignInAndSignUpLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="sign" element={<SignInAndSignUpLayout />}>
          <Route index element={<SignIn />} />
          <Route path="up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
