import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MainComp } from "../components/parts/MainComp";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Corso, a free, secure, and open-source backup tool for Microsoft 365"
    >
      <main>
        <MainComp />
      </main>
    </Layout>
  );
}
