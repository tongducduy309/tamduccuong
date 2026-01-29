
import { ContactPage } from "@/lib/page/ContactPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: { default: "Liên hệ", template: "%s | Tâm Đức Cường" },
};

export default function Contact() {
  return (
    <ContactPage/>
  );
}
