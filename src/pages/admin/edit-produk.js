import { sidebarAdmin } from "../../components/admin/sidebar.js";
import { navbarAdmin } from "../../components/admin/navbar.js";
import { getStore } from "../store/admin.store.js";

export default function renderEditProdukAdmin() {
    const {produk} = getStore()
  return `
  <section class="bg-[#fdfcfb] min-h-screen flex flex-col">
    ${navbarAdmin()}
    <div class="flex flex-1">
      ${sidebarAdmin()}

      <main class="flex-1 p-10">
        <h2 class="text-3xl font-bold text-sky-600 mb-4">Edit Produk </h2>
        <p class="text-gray-700 mb-10">Edit produk dari perusahaan</p>

        <form class="form-addProduk bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] max-w-2xl">
          <div class="mb-5">
            <label class="block text-gray-700 font-semibold mb-2" for="nama_produk">Nama Produk</label>
            <input type="text" id="nama_produk" name="nama_produk" placeholder="Masukkan nama produk" value="${produk.nama_produk}"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>

          <div class="mb-5">
            <label class="block text-gray-700 font-semibold mb-2" for="kategori">Kategori</label>
            <select id="kategori" name="kategori"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option value="">-- Pilih Kategori --</option>
              <option value="tekstil" ${produk.kategori === "tekstil" ? "selected" : ""}>Tekstil</option>
              <option value="benang" ${produk.kategori === "benang" ? "selected" : ""}>Benang</option>
              <option value="serat" ${produk.kategori === "tekstil" ? "serat" : ""}>Serat</option>
            </select>
          </div>

          <div class="grid sm:grid-cols-2 gap-6 mb-5">
            <div>
              <label class="block text-gray-700 font-semibold mb-2" for="harga">Harga</label>
              <input type="number" id="harga" name="harga" placeholder="Contoh: 75000" value="${produk.harga}"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label class="block text-gray-700 font-semibold mb-2" for="stok">Stok</label>
              <input type="number" id="stok" name="stok" placeholder="Contoh: 100" value="${produk.stok}"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-gray-700 font-semibold mb-2" for="deskripsi">Deskripsi Produk</label>
            <textarea id="deskripsi" name="deskripsi" rows="4" placeholder="Tulis deskripsi produk..."
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500">${produk.deskripsi}</textarea>
          </div>


          <div class="flex justify-end gap-4">
            <button type="button"
              class="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition">Batal</button>
            <button type="submit"
              class="add-produk bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition">Simpan Produk</button>
          </div>
        </form>
      </main>
    </div>
  </section>
  `;
}
