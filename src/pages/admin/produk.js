import { navbarAdmin } from "../../components/admin/navbar";
import { sidebarAdmin } from "../../components/admin/sidebar";
import { getStore } from "../store/admin.store.js";
export const renderProdukAdmin = ()=>{
  const {data} = getStore()
  const component = data.map((el,index)=>{
    return `
     <tr class="hover:bg-gray-50 transition">
                  <td class="py-3 px-4">${index+=1}</td>
                  <td class="py-3 px-4">${el.nama_produk}</td>
                  <td class="py-3 px-4">${el.kategori}</td>
                  <td class="py-3 px-4">Rp ${el.harga}</td>
                  <td class="py-3 px-4">${el.stok}</td>
                  <td class="py-3 px-4 text-center space-x-2">
                    <button class="bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600">Edit</button>
                    <button class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600">Detail</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">Hapus</button>
                  </td>
      </tr>
    `
  }).join("")
    return `
      <section class="bg-[#fdfcfb] min-h-screen flex flex-col">
    ${navbarAdmin()}

    <div class="flex flex-1">
      ${sidebarAdmin()}

      <main class="flex-1 p-10">
        <h2 class="text-3xl font-bold text-sky-600 mb-4">Manajemen Produk</h2>
        <p class="text-gray-700 mb-10">Lihat, tambahkan, dan kelola seluruh produk tekstil perusahaan Anda di sini.</p>

        <div class="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-sky-600">Daftar Produk</h3>
            <a href="/add-produk" class="navigate-link bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition">
              + Tambah Produk
            </a>
          </div>

          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead class="bg-sky-600 text-white">
                <tr>
                  <th class="py-3 px-4 text-left">#</th>
                  <th class="py-3 px-4 text-left">Nama Produk</th>
                  <th class="py-3 px-4 text-left">Kategori</th>
                  <th class="py-3 px-4 text-left">Harga</th>
                  <th class="py-3 px-4 text-left">Stok</th>
                  <th class="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-gray-700">
                ${component}
              
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </section>
    `
}