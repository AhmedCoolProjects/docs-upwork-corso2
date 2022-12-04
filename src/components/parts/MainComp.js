import React from "react";
import "animate.css";
import loadable from "@loadable/component";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Cookies from "./Cookies";

const BackToTopComp = loadable(() => import("./BackToTop"));

export function MainComp() {
  return (
    <>
      {/* SECTION 1 */}
      <FirstSection />
      {/* SECTION 2 */}
      <SecondSection />
      {/* SECTION 3 */}
      <ThirdSection />
      {/* SECTION 4 */}
      <FourthSection />
      {/* BACK TO TOP */}
      <BackToTopComp />
      {/* COOKIES  */}
      <Cookies />
    </>
  );
}
