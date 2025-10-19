export const renderLogin = () => {
    return `
<section class="bg-[#fdfcfb] min-h-screen flex items-center justify-center px-6 py-12">
  <div class="bg-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.25)] p-10 w-full max-w-md transition duration-300 hover:shadow-[0_16px_55px_rgba(0,0,0,0.35)]">
    <h2 class="text-3xl font-bold text-center text-sky-600 mb-8">Admin Login</h2>
    
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Masukkan email admin"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <div>
        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
        <input type="password" id="password" name="password" placeholder="Masukkan password"
               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
      </div>

      <button type="submit"
              class="w-full bg-sky-600 text-white py-3 rounded-full font-semibold hover:bg-sky-700 transition">
        Masuk
      </button>
    </form>

    <p class="text-center text-gray-600 text-sm mt-6">
      Belum punya akun? 
      <a href="/register" class="navigate-link text-sky-600 font-semibold hover:underline">Daftar di sini</a>
    </p>
  </div>
</section>
`;
};
