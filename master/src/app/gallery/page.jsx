import Breadcrumb from "@/components/Breadcrumb";
import GalleryLayer from "@/components/GalleryLayer";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "WowDash NEXT JS - Admin Dashboard Multipurpose Bootstrap 5 Template",
  description:
    "Wowdash NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Gallery' />

        {/* GalleryLayer */}
        <GalleryLayer />
      </MasterLayout>
    </>
  );
};

export default Page;