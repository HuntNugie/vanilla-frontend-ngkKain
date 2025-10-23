import { getStore } from "../../pages/store/admin.store";

export const navbarAdmin = () => {
  const nama = getStore().email
  return `
     <nav class="bg-white shadow-[0_6px_25px_rgba(0,0,0,0.12)] px-8 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-sky-600">Admin Dashboard</h1>
      <div class="relative" id="profileMenuContainer">
        <button id="profileBtn" class="flex items-center gap-2 focus:outline-none">
          <img src="https://via.placeholder.com/40" alt="Profile" class="w-10 h-10 rounded-full border border-sky-600">
          <span class="font-semibold text-gray-700">${nama}</span>
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="dropdownMenu" class="hidden absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <a href="#/profile" class="block px-4 py-3 text-gray-700 hover:bg-sky-50">Profile</a>
          <hr class="border-gray-200">
          <a href="/logout" class="logout block px-4 py-3 text-red-600 font-semibold hover:bg-red-50">Logout</a>
        </div>
      </div>
    </nav>`;
};
