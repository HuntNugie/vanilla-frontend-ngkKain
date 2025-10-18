import navbar from "../components/navbar.js"
export const renderService = ()=>{
    return ` 
    ${navbar()}
   <section class="bg-[#fdfcfb] text-gray-800 min-h-screen px-8 py-20">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-sky-600 mb-4">Our Services & Products</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      Kami tidak hanya menyediakan layanan tekstil terbaik, tetapi juga berbagai produk kain berkualitas tinggi yang siap mendukung kebutuhan industri dan kreatif Anda.
    </p>
  </div>

  <!-- GRID -->
  <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <!-- ITEM 1 -->
    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" 
           alt="Kain Custom" 
           class="w-full h-48 object-cover">
      <div class="p-8">
        <h3 class="text-2xl font-semibold text-sky-600 mb-2">Kain Custom</h3>
        <p class="text-gray-600 mb-4">
          Produksi kain dengan desain, warna, dan tekstur sesuai kebutuhan Anda. Cocok untuk brand fashion, interior, hingga seragam perusahaan.
        </p>
        <ul class="text-sm text-gray-500 space-y-1">
          <li>• Katun premium</li>
          <li>• Linen modern</li>
          <li>• Satin halus</li>
        </ul>
      </div>
    </div>

    <!-- ITEM 2 -->
    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
           alt="Tekstil Ramah Lingkungan" 
           class="w-full h-48 object-cover">
      <div class="p-8">
        <h3 class="text-2xl font-semibold text-sky-600 mb-2">Tekstil Ramah Lingkungan</h3>
        <p class="text-gray-600 mb-4">
          Kami berkomitmen terhadap keberlanjutan dengan bahan daur ulang dan pewarna alami yang aman bagi bumi.
        </p>
        <ul class="text-sm text-gray-500 space-y-1">
          <li>• Serat bambu</li>
          <li>• Kain daur ulang</li>
          <li>• Pewarna alami</li>
        </ul>
      </div>
    </div>

    <!-- ITEM 3 -->
    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172"
           alt="Distribusi Global"
           class="w-full h-48 object-cover">
      <div class="p-8">
        <h3 class="text-2xl font-semibold text-sky-600 mb-2">Distribusi Global</h3>
        <p class="text-gray-600 mb-4">
          Kami melayani pengiriman produk tekstil ke seluruh dunia melalui jaringan distribusi terpercaya.
        </p>
        <ul class="text-sm text-gray-500 space-y-1">
          <li>• Asia</li>
          <li>• Eropa</li>
          <li>• Amerika</li>
        </ul>
      </div>
    </div>
  </div>


`
}