export const sidebarAdmin = ()=>{
    return `     <aside class="w-64 bg-white shadow-[4px_0_25px_rgba(0,0,0,0.08)] p-6 hidden md:block">
      <h2 class="text-xl font-bold text-sky-600 mb-6">Menu</h2>
      <ul class="space-y-3">
        <li><a href="/dashboard" class="navigate-link block px-4 py-2 rounded-lg hover:bg-sky-50 text-gray-700 font-medium">Dashboard</a></li>
        <li><a href="/produk" class="navigate-link block px-4 py-2 rounded-lg hover:bg-sky-50 text-gray-700 font-medium">Produk</a></li>
        <li><a href="/pesanan" class="navigate-link block px-4 py-2 rounded-lg hover:bg-sky-50 text-gray-700 font-medium">Pesanan</a></li>
        <li><a href="/laporan" class="navigate-link block px-4 py-2 rounded-lg hover:bg-sky-50 text-gray-700 font-medium">Laporan</a></li>
      </ul>
    </aside>`
}