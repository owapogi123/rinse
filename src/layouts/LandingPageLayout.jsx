import LandingPageNav from "../components/LandingPageNav";
import LandingPageTwo from "../components/LandingPageTwo";
import LandingPage from "../components/LandingPage";
import { Outlet } from "react-router";
import LandingPageThree from "../components/LandingPageThree";
export default function LandingPageLayout() {
  return (
    <>
      <LandingPageNav />
      <LandingPageTwo />
      <LandingPage />
      <LandingPageThree />
    </>
  );
}
