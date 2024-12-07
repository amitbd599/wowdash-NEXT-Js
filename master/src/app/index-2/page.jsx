import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerTwo from "@/components/DashBoardLayerTwo";
import MasterLayout from "@/masterLayout/MasterLayout";

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='CRM' />

        {/* DashBoardLayerTwo */}
        <DashBoardLayerTwo />
      </MasterLayout>
    </>
  );
};

export default Page;
