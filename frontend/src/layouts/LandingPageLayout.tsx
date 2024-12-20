import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: Props) => {
  return (
    <>
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 h-full overflow-y-auto bg-gray-100">
        {children}
      </main>
    </div>
    </>
  );
};

export default LandingPageLayout;
