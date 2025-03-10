import PageHeader from "@/components/PageHeader";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
};

export default layout;
