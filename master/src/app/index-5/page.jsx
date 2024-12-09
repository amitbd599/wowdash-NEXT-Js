import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerFive from "@/components/DashBoardLayerFive";
import MasterLayout from "@/masterLayout/MasterLayout";

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Investment' />

        {/* DashBoardLayerFive */}
        <DashBoardLayerFive />
      </MasterLayout>
    </>
  );
};

export default Page;
