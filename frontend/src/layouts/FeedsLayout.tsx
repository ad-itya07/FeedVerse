import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

type Props = {
  children: React.ReactNode;
};

const FeedsLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-100 border-l border-gray-400">
          {children}
        </main>
      </div>
    </div>
  );
};

export default FeedsLayout;
