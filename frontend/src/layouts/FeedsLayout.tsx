import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

type Props = {
  children: React.ReactNode;
};

const FeedsLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar stays at the top */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 h-full overflow-x-hidden overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 h-full overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default FeedsLayout;
