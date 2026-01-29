
import { MainPage } from "@/lib/page/MainPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: { default: "Trang chủ", template: "%s | Tâm Đức Cường" },
};

export default function HomePage() {
  return (
      <MainPage/>
  );
}
