import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerFour from "@/components/DashBoardLayerFour";
import MasterLayout from "@/masterLayout/MasterLayout";

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Cryptocracy' />

        {/* DashBoardLayerFour */}
        <DashBoardLayerFour />
      </MasterLayout>
    </>
  );
};

export default Page;
