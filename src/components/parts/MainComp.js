import React from "react";
import "animate.css";

export function MainComp() {
  return (
    <html lang="en" class="light scroll-smooth" dir="ltr">
      <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        {/* SECTION 1 */}
        <section class="relative home-wrapper items-center overflow-hidden">
          <div class="container z-2">
            <div class="grid grid-cols-1 md:mt-44 mt-32 text-center">
              <div class="wow animate__animated animate__fadeIn">
                <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
                  Free, Secure, and Open-Source
                  <br /> Backup for Microsoft 365
                </h4>
                <p class="text-slate-300 text-xl max-w-xl mx-auto">
                  The #1 open-source backup tool for Microsoft 365
                </p>
              </div>

              <div class="mt-12 mb-6">
                <a
                  href="https://docs.corsobackup.io/setup/download"
                  target="_blank"
                  class="text-2xl font-bold btn bg-indigo-800 hover:bg-indigo-900 border-indigo-800 hover:border-indigo-900 text-white rounded-md"
                >
                  Download Now
                </a>
              </div>

              <div
                class="home-dashboard mt-8 z-3 wow animate__ animate__fadeIn animated"
                style={{
                  visibility: "visible",
                  animationName: "fadeIn",
                }}
              >
                <img
                  src="assets/images/cloudbackup.svg"
                  class="w-[80%] inline-block"
                  alt="Cloud backup and storage"
                />
              </div>
            </div>

            <div class="bg-indigo-600 w-8 h-16 z-2 absolute left-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
            <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute left-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>

            <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute right-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
            <div class="bg-indigo-600 w-8 h-16 z-2 absolute right-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
          </div>
        </section>
        {/* SECTION 2 */}
        <section class="relative items-center overflow-hidden">
          <div class="container">
            <div class="grid content-center  md:mt-24 mt-16 text-center">
              <div class="wow animate__animated animate__fadeIn">
                <div class="flex items-center bg-gray-200 rounded-t-lg h-6">
                  <div class="align-middle">
                    <img class="h-4 px-2" src="assets/images/powershell.svg" />
                  </div>
                </div>
                <div class="p-2 border-x-2 border-b-2 rounded-b-lg border-gray-200 overflow-clip">
                  <video muted="" autoplay="" playsinline="" loop>
                    <source
                      src="assets/images/corso_demo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3 */}
        {/* SECTION 4 */}
        <section class="relative md:py-16  py-12 md:pt-0 pt-0">
          <div class="absolute bottom-0 left-0 !z-0 right-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>

          <div class="container !z-50">
            <div
              class="grid grid-cols-1 justify-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <div class="relative z-1">
                <div class="grid grid-cols-1 md:text-left text-center justify-center">
                  <div class="relative">
                    <img
                      src="assets/images/laptop-macbook.png"
                      class="mx-auto"
                      alt="Laptop image showing Microsoft 365 icons"
                    />
                  </div>
                </div>
                <div class="content md:mt-0">
                  <div class="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
                    <div class="lg:col-start-2 lg:col-span-10">
                      <div class="grid md:grid-cols-2 grid-cols-1 items-center">
                        <div class="mt-8">
                          <div class="section-title text-md-start">
                            <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                              Start Protecting Your
                              <br /> Microsoft 365 Data!
                            </h3>
                            <h6 class="text-white/50 text-lg font-semibold">
                              Corso is Free and Open Source
                            </h6>
                          </div>
                        </div>

                        <div class="mt-8">
                          <div class="section-title text-md-start">
                            <p class="text-white/50 max-w-xl mx-auto mb-2">
                              Follow our quick-start guide to start protecting
                              your business-critical Microsoft 365 data in just
                              a few minutes.
                            </p>
                            <a
                              href="https://docs.corsobackup.io/quickstart"
                              class="text-white"
                            >
                              Get Started{" "}
                              <i class="uil uil-angle-right-b align-middle"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BACK TO TOP */}
        <a
          href="#"
          onclick="topFunction()"
          id="back-to-top"
          class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
        >
          <i class="uil uil-arrow-up"></i>
        </a>
        {/* COOKIES  */}
      </body>
    </html>
  );
}
