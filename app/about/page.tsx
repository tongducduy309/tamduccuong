


import Layout from "@/lib/layouts/(layout)/layout";
import { Metadata } from "next";
import AboutPage from "@/lib/page/AboutPage";


export const metadata: Metadata = {
  title: { default: "Về chúng tôi", template: "%s | Tâm Đức Cường" },
};

export default function About() {
  return (
    <AboutPage/>
  );
}
