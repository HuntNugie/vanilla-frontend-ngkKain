export const renderRegister = ()=>{
    return `
    <section class="bg-[#fdfcfb] min-h-screen flex items-center justify-center px-6 py-12">
  <div class="bg-white rounded-2xl shadow-md p-10 w-full max-w-md">
    <h2 class="text-3xl font-bold text-center text-sky-600 mb-8">Register Admin</h2>
    
    <form action="" method="POST" class="form-register space-y-6">
      <div>
        <label for="name" class="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
        <input type="text" id="name" name="nama" placeholder="Nama lengkap admin"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Masukkan email aktif"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <div>
        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
        <input type="password" id="password" name="password" placeholder="Buat password"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <div>
        <label for="confirm" class="block text-gray-700 font-semibold mb-2">Konfirmasi Password</label>
        <input type="password" id="confirm" name="confirm" placeholder="Ulangi password"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <button type="submit" 
              class="submit-register w-full bg-sky-600 text-white py-3 rounded-full font-semibold hover:bg-sky-700 transition">
        Daftar
      </button>
    </form>

    <p class="text-center text-gray-600 text-sm mt-6">
      Sudah punya akun?
      <a href="/login" class="navigate-link text-sky-600 font-semibold hover:underline">Masuk di sini</a>
    </p>
  </div>
</section>
`
}