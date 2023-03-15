import TopNavBar from "@/Components/Application/UI/TopNavBar";
import SideNavBar from "../../../Components/Application/UI/SideNavBar";

export default function DashboardLayout({ children }) {
  return (
    <section className="">
      <div>
        <div className="flex flex-col border-2 border-green-500 h-screen w-screen">
          <TopNavBar />

          <div className="flex border-2 border-blue-500">
            <SideNavBar />
            {/* Main Content */}
            <div className="flex flex-1 flex-col lg:pl-64 border-2 border-red-500">
              <main>
                <div className="py-6">
                  <div className="mx-auto py-2 max-w-10xl px-4 sm:px-6 lg:px-8 border-2 border-blue-500">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Dashboard
                    </h1>
                  </div>
                  <div className="w-max-[1800px] p-44 sm:px-6 lg:p-8">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
