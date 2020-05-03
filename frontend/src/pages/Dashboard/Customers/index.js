import React from "react";
import "./index.scss";

import SectionDashboard from "pages/Dashboard/SectionDashboard";
import ClienteItemList from "pages/Dashboard/Customers/CustomerItemList";

const Customers = () => (
  <SectionDashboard
    title="Últimos clientes cadastrados"
    currentPath="/customers"
  >
    <div className="container-dashboard-clientes">
      <ClienteItemList />
    </div>
  </SectionDashboard>
);

export default Customers;
