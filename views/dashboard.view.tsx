import { useTranslation } from "next-i18next";
import React from "react";

import MainLayout from "@/layouts/main.layout";

const DashboardView = () => {
  const { t } = useTranslation(["common"]);
  return (
    <MainLayout>
      <div>{t("test")}</div>
    </MainLayout>
  );
};

export default DashboardView;
