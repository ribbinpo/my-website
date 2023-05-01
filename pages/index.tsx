import { Inter } from "next/font/google";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DashboardView from "@/views/dashboard.view";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      <DashboardView />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
