import { sidebarAdmin } from "../../components/admin/sidebar.js";
import { navbarAdmin } from "../../components/admin/navbar.js";

export const renderDashboardAdmin = ()=>{
    return `
   <section class="bg-[#fdfcfb] min-h-screen flex flex-col">
  ${navbarAdmin()}

  <!-- KONTEN UTAMA -->
  <div class="flex flex-1">
   ${sidebarAdmin()}

    <!-- DASHBOARD CONTENT -->
    <main class="flex-1 p-10">
      <h2 class="text-3xl font-bold text-sky-600 mb-4">Selamat Datang, Admin</h2>
      <p class="text-gray-700 mb-10">Kelola data produk, pesanan, dan laporan dengan mudah dari satu tempat.</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_55px_rgba(0,0,0,0.35)] transition">
          <h3 class="text-xl font-semibold text-sky-600 mb-2">Total Produk</h3>
          <p class="text-gray-600 text-lg font-medium">124</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_55px_rgba(0,0,0,0.35)] transition">
          <h3 class="text-xl font-semibold text-sky-600 mb-2">Pesanan Baru</h3>
          <p class="text-gray-600 text-lg font-medium">58</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_55px_rgba(0,0,0,0.35)] transition">
          <h3 class="text-xl font-semibold text-sky-600 mb-2">Laporan Bulanan</h3>
          <p class="text-gray-600 text-lg font-medium">10</p>
        </div>
      </div>
    </main>
  </div>
</section>

<script>
  // Dropdown profil
  const profileBtn = document.getElementById("profileBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
    window.addEventListener("click", (e) => {
      if (!profileBtn.contains(e.target)) dropdownMenu.classList.add("hidden");
    });
  }
</script>
`
}