import navbar from "../components/navbar.js"
export const renderProduct = ()=>{
    return `
    ${navbar()}
    <section class="bg-[#fdfcfb] text-gray-800 min-h-screen px-8 py-20">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-sky-600 mb-4">Our Products</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      Jelajahi berbagai produk kain tekstil berkualitas tinggi yang kami sediakan untuk berbagai kebutuhan industri, fashion, dan kreatif.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    <!-- Produk 1 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" 
           alt="Kain Katun Premium" 
           class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-sky-600 mb-2">Kain Katun Premium</h3>
        <p class="text-gray-600 mb-4">Kain katun lembut, nyaman, cocok untuk fashion dan interior rumah.</p>
        <span class="font-bold text-sky-600">Rp 120.000 / meter</span>
      </div>
    </div>

    <!-- Produk 2 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
           alt="Linen Modern"
           class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-sky-600 mb-2">Linen Modern</h3>
        <p class="text-gray-600 mb-4">Linen berkualitas tinggi, tekstur natural, cocok untuk dekorasi dan pakaian.</p>
        <span class="font-bold text-sky-600">Rp 150.000 / meter</span>
      </div>
    </div>

    <!-- Produk 3 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="https://images.unsplash.com/photo-1616627561973-8d6e3ac0c6bb"
           alt="Satin Halus"
           class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-sky-600 mb-2">Satin Halus</h3>
        <p class="text-gray-600 mb-4">Satin dengan kilau lembut, ideal untuk gaun, kemeja, dan kerajinan kreatif.</p>
        <span class="font-bold text-sky-600">Rp 180.000 / meter</span>
      </div>
    </div>

    <!-- Produk 4 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src="https://images.unsplash.com/photo-1598300056512-97c7a3f8f64b"
           alt="Kain Daur Ulang"
           class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-sky-600 mb-2">Kain Daur Ulang</h3>
        <p class="text-gray-600 mb-4">Kain ramah lingkungan, terbuat dari bahan daur ulang, tetap lembut dan tahan lama.</p>
        <span class="font-bold text-sky-600">Rp 100.000 / meter</span>
      </div>
    </div>
  </div>

  <!-- Tombol Lihat Semua Produk -->
  <div class="text-center mt-16">
    <a href="#all-products"
       class="inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition">
      Lihat Semua Produk
    </a>
  </div>
</section>
`
}