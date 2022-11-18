import React, { useEffect } from "react";
import feather from "feather-icons";
import { WOW } from "wowjs";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function ThirdSection() {
  return (
    <BrowserOnly fallback={<div />}>
      {() => {
        useEffect(() => {
          new WOW().init();
          feather.replace();
        });
        return (
          <section class="relative md:py-24 py-16 overflow-hidden">
            <div class="container">
              <div
                class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h3 class="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
                  Key Features
                </h3>

                <p class="text-slate-400 max-w-xl mx-auto">
                  See why Corso is a perfect fit for your Microsoft 365 backup
                  and recovery needs.
                </p>
              </div>

              <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row-dense gap-[30px] mt-8">
                <div
                  class="col-start-1 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="share-2" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">
                        Comprehensive Workflows
                      </h4>
                    </div>
                  </div>
                </div>

                <div
                  class="col-start-1 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="zap" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">High Throughput</h4>
                    </div>
                  </div>
                </div>

                <div
                  class="col-start-1 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="activity" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">Fault Tolerance</h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-2 md:col-start-1  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="lock" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">
                        End-to-End Encryption
                      </h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-2 md:col-start-1 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="copy" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">Deduplication</h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-2 md:col-start-2 md:order-last wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i
                        data-feather="minimize-2"
                        class="h-5 w-5 rotate-45"
                      ></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">Compression</h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-3 md:col-start-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i data-feather="code" class="h-5 w-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">Open Source</h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-3 md:col-start-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i
                        data-feather="upload-cloud"
                        class="h-5 w-5 rotate-45"
                      ></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">
                        Choice of Object Storage
                      </h4>
                    </div>
                  </div>
                </div>

                <div
                  class="lg:col-start-3 md:col-start-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                      <i
                        data-feather="check-circle"
                        class="h-5 w-5 rotate-45"
                      ></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-0 text-lg font-medium">
                        Retention Policies
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container md:mt-24 mt-16">
              <div class="container lg mx-auto">
                <div class="grid grid-cols-1 pb-2 text-center wow animate__animated animate__fadeInUp">
                  <h3 class="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
                    Why Everyone{" "}
                    <span class="after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">
                      Loves
                    </span>{" "}
                    Corso
                  </h3>
                </div>
              </div>

              <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div
                  class="relative wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img
                    src="assets/images/why/chat.svg"
                    class="rounded-lg"
                    alt="Group discussion"
                  />
                  <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 left-0 rotate-45 -z-1 rounded-3xl"></div>
                </div>

                <div
                  class="lg:ml-8 wow animate__animated animate__fadeInRight"
                  data-wow-delay=".3s"
                >
                  <h3 class="mb-4 text-3xl leading-normal font-medium">
                    Community
                  </h3>
                  <p class="text-slate-400">
                    The Corso community provides a venue for M365 admins to
                    share and learn about the importance of data protection as
                    well as best practices around M365 secure configuration and
                    compliance management.
                  </p>
                  <ul class="list-none text-slate-400 mt-4">
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Community-led blogs, forums, and discussions
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Public and feedback-driven development roadmap{" "}
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      All community contributions welcome
                    </li>
                  </ul>

                  <div class="mt-4">
                    <a
                      href="https://discord.gg/63DTTSnuhT"
                      target="_blank"
                      class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      Join Us On Discord{" "}
                      <i class="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container md:mt-24 mt-16">
              <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div
                  class="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
                  data-wow-delay=".5s"
                >
                  <img
                    src="assets/images/why/security.svg"
                    class="rounded-lg"
                    alt="Approval of fingerprint security"
                  />
                  <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 right-0 rotate-45 -z-1 rounded-3xl"></div>
                </div>

                <div
                  class="lg:mr-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <h3 class="mb-4 text-3xl leading-normal font-medium">
                    Data Security
                  </h3>
                  <p class="text-slate-400">
                    Corso provides secure data backup that protects customers
                    against accidental data loss, service provider downtime, and
                    malicious threats including ransomware attacks.
                  </p>
                  <ul class="list-none text-slate-400 mt-4">
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      End-to-end zero-trust AES-256 and TLS encryption
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Support for air-gapped backup storage
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Choice of backup storage provider and geo location
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="container md:mt-24 mt-16">
              <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                <div
                  class="relative wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img
                    src="assets/images/why/data.svg"
                    class="rounded-lg"
                    alt="Data extraction dashboard"
                  />
                  <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 left-0 rotate-45 -z-1 rounded-3xl"></div>
                </div>

                <div
                  class="lg:ml-8 wow animate__animated animate__fadeInRight"
                  data-wow-delay=".5s"
                >
                  <h3 class="mb-4 text-3xl leading-normal font-medium">
                    Robust Backups
                  </h3>
                  <p class="text-slate-400">
                    Corso, purpose-built for M365 protection, provides
                    easy-to-use comprehensive backup and restore workflows that
                    reduces backup time, improve time-to-recovery, reduce admin
                    overhead, and replace unreliable scripts or workarounds.
                  </p>
                  <ul class="list-none text-slate-400 mt-4">
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Constantly updated M365 Graph Data engine
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Purpose-built, flexible, fine-grained data protection
                      workflows
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      High-performance backup and recovery data movers
                    </li>
                  </ul>

                  <div class="mt-4">
                    <a
                      href="https://docs.corsobackup.io/quickstart"
                      target="_blank"
                      class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      Use The Quick Start For Your First Backup{" "}
                      <i class="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container md:mt-24 mt-16">
              <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div
                  class="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
                  data-wow-delay=".5s"
                >
                  <img
                    src="assets/images/why/savings.svg"
                    class="rounded-lg"
                    alt="Adding money to a savings jar"
                  />
                  <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 right-0 rotate-45 -z-1 rounded-3xl"></div>
                </div>

                <div
                  class="lg:mr-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <h3 class="mb-4 text-3xl leading-normal font-medium">
                    Cost Savings
                  </h3>
                  <p class="text-slate-400">
                    Corso, a 100% open-source tool, provides a free alternative
                    for cost-conscious teams. It further reduces storage costs
                    by supporting flexible retention policies and efficiently
                    compressing and deduplicating data before storing it in
                    low-cost cloud object storage.
                  </p>
                  <ul class="list-none text-slate-400 mt-4">
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Free forever OSS with no licensing costs
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Client-side compression and deduplication
                    </li>
                    <li class="mb-1 flex">
                      <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                      Support for S3-compliant storage including AWS Glacier IA
                    </li>
                  </ul>

                  <div class="mt-4">
                    <a
                      href="https://docs.corsobackup.io/setup/repos"
                      target="_blank"
                      class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      Read about our Object Storage support{" "}
                      <i class="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container md:mb-8 mb-4 md:mt-24 mt-16 wow animate__animated animate__fadeInUp">
              <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
                  Frequently Asked Questions
                </h3>
              </div>

              <div class="relative grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="md:col-span-6">
                  <div class="relative">
                    <div class="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                      <div
                        class="w-full jarallax py-72 bg-slate-400 custom-bg_ bg-no-repeat bg-top"
                        data-jarallax='{"speed": 0.1}'
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="md:col-span-6">
                  <div id="accordion-collapse" data-accordion="collapse">
                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>What platforms does Corso run on?</span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-1"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-1"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            Corso has both native binaries and container images
                            for Windows, Linux, and macOS.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-2"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-2"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-2"
                        >
                          <span>
                            What Microsoft 365 services can I backup using
                            Corso?
                          </span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-2"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-2"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            Corso currently supports OneDrive and Exchange.
                            Support for Teams and SharePoint is in active
                            development and is therefore not recommended for
                            production use.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-3"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-3"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-3"
                        >
                          <span>What object storage does Corso support?</span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-3"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-3"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            Corso supports any S3-compliant object storage
                            system including AWS S3 (including Glacier Instant
                            Access), Google Cloud Storage, and Backblaze. Azure
                            Blob support is coming soon.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-4"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-4"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-4"
                        >
                          <span>How can I get help for Corso?</span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-4"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-4"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            If you are unable to find an answer in our
                            documentation, please file{" "}
                            <a
                              href="https://github.com/alcionai/corso/issues"
                              class="text-indigo-600"
                              target="_blank"
                            >
                              GitHub issues
                            </a>{" "}
                            for bugs or join the{" "}
                            <a
                              href="https://discord.gg/63DTTSnuhT"
                              class="text-indigo-600"
                              target="_blank"
                            >
                              Discord community
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-5"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-5"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-5"
                        >
                          <span>What is Corso's open-source license?</span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 rotate-180 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-5"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-5"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            Corso's source code is licensed under the
                            OSI-approved Apache v2 open-source license.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                      <h2
                        class="text-base font-semibold"
                        id="accordion-collapse-heading-6"
                      >
                        <button
                          type="button"
                          class="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target="#accordion-collapse-body-6"
                          aria-expanded="false"
                          aria-controls="accordion-collapse-body-6"
                        >
                          <span>How do I request a new feature?</span>
                          <svg
                            data-accordion-icon
                            class="w-4 h-4 rotate-180 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-6"
                        class="hidden"
                        aria-labelledby="accordion-collapse-heading-6"
                      >
                        <div class="p-5">
                          <p class="text-slate-400 dark:text-gray-400">
                            You can request new features by creating a{" "}
                            <a
                              href="https://github.com/alcionai/corso/issues"
                              class="text-indigo-600"
                              target="_blank"
                            >
                              new GitHub issue
                            </a>{" "}
                            and labeling it as an enhancement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </BrowserOnly>
  );
}
