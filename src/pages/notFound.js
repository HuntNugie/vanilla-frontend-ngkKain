export const notFound = ()=>{
    return ` 
   
    <section class="flex flex-col justify-center items-center text-center min-h-screen bg-[#fdfcfb] px-6">
    <div class="max-w-md">
      <h1 class="text-[8rem] font-extrabold text-sky-600 leading-none mb-4">404</h1>
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p class="text-gray-600 mb-8">
        Halaman yang kamu cari tidak ditemukan.  
        Mungkin alamatnya salah atau halaman telah dipindahkan.
      </p>
      <a href="/" 
         class="home inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition shadow-md">
         Kembali ke Beranda
      </a>
    </div>
  </section>`
}