import navbar from "../components/navbar.js"
export const renderAbout = ()=>{
    return `
    ${navbar()}
    <section class="bg-[#fdfcfb] text-gray-800 min-h-screen px-8 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
    <img src="img/pabrik.jpeg" alt="Textile Factory" 
         class="rounded-2xl shadow-lg w-full md:w-1/2 object-cover">
    <div class="max-w-xl">
      <h2 class="text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Us</h2>
      <p class="text-lg text-gray-600 mb-4">
        NGKKain berdiri sejak 2004 dan berkomitmen untuk menciptakan produk tekstil inovatif yang menggabungkan seni, 
        teknologi, dan keberlanjutan.
      </p>
      <p class="text-lg text-gray-600">
        Dengan jaringan global dan tim ahli, kami melayani berbagai sektor mulai dari fashion, industri otomotif, hingga kebutuhan rumah tangga.
      </p>
    </div>
  </section>`
}