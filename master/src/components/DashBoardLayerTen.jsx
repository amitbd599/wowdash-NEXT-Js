import IncomeVsExpense from "./child/IncomeVsExpense";
import TopCustomer from "./child/TopCustomer";
import TopSuppliers from "./child/TopSuppliers";
import UnitCountSeven from "./child/UnitCountSeven";
import UsersChart from "./child/UsersChart";

const DashBoardLayerTen = () => {
  return (
    <div className='row gy-4'>
      {/* UnitCountSeven */}
      <UnitCountSeven />

      {/* IncomeVsExpense */}
      <IncomeVsExpense />

      {/* UsersChart */}
      <UsersChart />

      {/* TopSuppliers */}
      <TopSuppliers />

      {/* TopCustomer */}
      <TopCustomer />

      {/* OverallReport */}
      {/* <OverallReport /> */}

      {/* PurchaseAndSales */}
      {/* <PurchaseAndSales /> */}

      {/* RecentTransactions */}
      {/* <RecentTransactions /> */}
    </div>
  );
};

export default DashBoardLayerTen;
