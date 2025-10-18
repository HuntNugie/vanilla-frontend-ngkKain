import navbar from '../components/navbar.js';
export const renderHome = () => {
  return `
    ${navbar ()}
    <section class="bg-[#fdfcfb] text-gray-800 min-h-screen flex flex-col justify-center items-center px-6">
    <div class="max-w-4xl text-center">
      <h2 class="text-4xl md:text-6xl font-bold mb-6 text-sky-600">Quality Textile for a Sustainable Future</h2>
      <p class="text-lg md:text-xl text-gray-600 mb-8">
        Kami menghadirkan solusi tekstil berkualitas tinggi dengan teknologi ramah lingkungan, 
        memenuhi kebutuhan fashion dan industri modern.
      </p>
      <a href="#/about" class="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition shadow-md">Pelajari Lebih Lanjut</a>
    </div>
  </section>
    `;
};
