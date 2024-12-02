export default function AdminDashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <h1 className="text-4xl font-bold text-red-500 text-center mt-4">
            GymSync
          </h1>
          <ul className="space-y-4 mt-10 p-5">
            {/* <li>
                <a href="/dashboard" className="block hover:text-gray-400">
                  Dashboard Home
                </a>
              </li> */}
            <li>
              <a
                href="/dashboard/adminDashbord/manageTrainers"
                className="block hover:text-gray-400"
              >
                Manage Trainers
              </a>
            </li>
            <li>
              <a
                href="/dashboard/reports"
                className="block hover:text-gray-400"
              >
                Class Scheduling
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-700">Admin Dashboard</h1>
            <div className="space-x-4">
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                Profile
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500">
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
}
