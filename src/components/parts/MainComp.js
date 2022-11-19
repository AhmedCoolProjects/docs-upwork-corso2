import React from "react";
import "animate.css";
import loadable from "@loadable/component";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import FourthSection from "./FourthSection";
import Cookies from "./Cookies";

const OtherComponent = loadable(() => import("./ThirdSection"));

export function MainComp() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        {/* SECTION 1 */}
        <FirstSection />
        {/* SECTION 2 */}
        <SecondSection />
        {/* SECTION 3 */}
        <OtherComponent />
        {/* SECTION 4 */}
        <FourthSection />
        {/* BACK TO TOP */}
        <a
          href="#"
          onclick={topFunction}
          id="back-to-top"
          className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
        >
          <i className="uil uil-arrow-up"></i>
        </a>
        {/* COOKIES  */}
        <Cookies />
      </body>
    </html>
  );
}
