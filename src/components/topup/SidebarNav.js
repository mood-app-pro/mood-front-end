import React from 'react';

const SidebarNav = () => {
  return (
    <aside className="w-full md:w-1/5 bg-gray-100 p-4">
      <nav>
        <ul>
          <li className="mb-2"><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Profile Saya</a></li>
          <li className="mb-2"><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Dompet</a></li>
          <li className="mb-2"><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Order</a></li>
          <li className="mb-2"><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Customer Service</a></li>
          <li><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
