import React from "react";
import "animate.css";
import loadable from "@loadable/component";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import FourthSection from "./FourthSection";
import Cookies from "./Cookies";

const ThirdSectionComp = loadable(() => import("./ThirdSection"));
const BackToTopComp = loadable(() => import("./BackToTop"));

export function MainComp() {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className="font-nunito scroll-smooth text-base text-black dark:text-white dark:bg-slate-900">
        {/* SECTION 1 */}
        <FirstSection />
        {/* SECTION 2 */}
        <SecondSection />
        {/* SECTION 3 */}
        <ThirdSectionComp />
        {/* SECTION 4 */}
        <FourthSection />
        {/* BACK TO TOP */}
        <BackToTopComp />
        {/* COOKIES  */}
        <Cookies />
      </body>
    </html>
  );
}
