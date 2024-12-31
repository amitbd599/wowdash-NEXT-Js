import BalanceStatistic from "./child/BalanceStatistic";
import UnitCountEight from "./child/UnitCountEight";

const DashBoardLayerEleven = () => {
  return (
    <>
      {/* UnitCountEight */}
      <UnitCountEight />

      <div className='mt-24'>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            <div className='row gy-4'>
              {/* BalanceStatistic */}
              <BalanceStatistic />

              {/* EarningCategories */}
              {/* <EarningCategories /> */}

              {/* ExpenseStatistics */}
              {/* <ExpenseStatistics /> */}

              {/* PaymentHistory */}
              {/* <PaymentHistory /> */}

              {/* MonthlyExpenseBreakdown */}
              {/* <MonthlyExpenseBreakdown /> */}
            </div>
          </div>
          {/* Sidebar start */}
          <div className='col-xl-4'>
            {/* QuickTransfer */}
            {/* <QuickTransfer /> */}

            {/* Investment */}
            {/* <Investment /> */}
          </div>
          {/* Sidebar end */}
        </div>
      </div>

      {/* PaymentHistoryOne */}
      {/* <PaymentHistoryOne /> */}
    </>
  );
};

export default DashBoardLayerEleven;
