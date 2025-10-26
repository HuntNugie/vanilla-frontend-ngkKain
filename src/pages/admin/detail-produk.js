import { navbarAdmin } from "../../components/admin/navbar.js"
import { sidebarAdmin } from "../../components/admin/sidebar.js"
import { getStore } from "../store/admin.store.js"

export const renderDetailProdukAdmin = ()=>{
const {produk} = getStore()
    return `<section class="bg-[#fdfcfb] min-h-screen flex flex-col">
  ${navbarAdmin()}

  <div class="flex flex-1">
    ${sidebarAdmin()}

    <!-- DETAIL PRODUK -->
    <main class="flex-1 p-10">
      <h2 class="text-3xl font-bold text-sky-600 mb-6">Detail Produk</h2>

      <div class="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-8">
        <div class="space-y-5">
          <!-- NAMA DAN HARGA -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800">${produk.nama_produk}</h3>
            <p class="text-sky-600 text-lg font-medium mt-1">
              Rp ${produk.harga.toLocaleString('id-ID')}
            </p>
          </div>

          <!-- DESKRIPSI -->
          <div>
            <h4 class="text-lg font-semibold text-gray-700 mb-1">Deskripsi Produk</h4>
            <p class="text-gray-700 leading-relaxed">${produk.deskripsi}</p>
          </div>

          <!-- INFORMASI TAMBAHAN -->
          <div class="border-t border-gray-200 pt-4 text-sm text-gray-600 space-y-1">
            <p><span class="font-medium text-gray-800">Kategori:</span> ${produk.kategori}</p>
            <p><span class="font-medium text-gray-800">Stok:</span> ${produk.stok}</p>
          </div>

          <!-- AKSI -->
          <div class="flex gap-4 pt-6">
            <button
              class="bg-sky-600 text-white px-6 py-2 rounded-xl hover:bg-sky-700 transition"
              onclick="editProduk('${produk._id}')"
            >
              Edit
            </button>
            <button
              class="delete-produk bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
             data-id=${produk._id}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</section>
 `
}