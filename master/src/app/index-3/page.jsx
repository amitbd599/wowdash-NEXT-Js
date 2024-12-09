import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerThree from "@/components/DashBoardLayerThree";
import MasterLayout from "@/masterLayout/MasterLayout";

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='eCommerce' />

        {/* DashBoardLayerThree */}
        <DashBoardLayerThree />
      </MasterLayout>
    </>
  );
};

export default Page;
