import navbar from "../components/navbar.js"
export const renderContact = ()=>{
    return `
    ${navbar()}
  <section class="bg-[#fdfcfb] text-gray-800 min-h-screen px-8 py-20">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-sky-600 mb-4">Contact Us</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      Hubungi kami untuk pertanyaan, konsultasi, atau informasi lebih lanjut tentang layanan dan produk tekstil kami.
    </p>
  </div>

  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    <!-- FORM KONTAK -->
    <div class="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
      <form action="#" method="POST" class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 font-semibold mb-2">Nama</label>
          <input type="text" id="name" name="name" placeholder="Nama Anda"
                 class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
        </div>

        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Email Anda"
                 class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600">
        </div>

        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Pesan</label>
          <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda..."
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
        </div>

        <button type="submit"
                class="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition">
          Kirim Pesan
        </button>
      </form>
    </div>

    <!-- INFO KONTAK -->
    <div class="space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 class="text-2xl font-semibold text-sky-600 mb-4">Alamat</h3>
        <p class="text-gray-600">Jl. Contoh No.123, Jakarta, Indonesia</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 class="text-2xl font-semibold text-sky-600 mb-4">Email & Telepon</h3>
        <p class="text-gray-600">Email: info@textilecompany.com</p>
        <p class="text-gray-600">Telepon: +62 812 3456 7890</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 class="text-2xl font-semibold text-sky-600 mb-4">Jam Kerja</h3>
        <p class="text-gray-600">Senin - Jumat: 08.00 - 17.00</p>
        <p class="text-gray-600">Sabtu: 08.00 - 12.00</p>
      </div>
    </div>
  </div>

  <!-- OPSIONAL: MAP -->
  <div class="mt-16 max-w-6xl mx-auto">
    <iframe class="w-full h-80 rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.123456!3d-6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sContoh+Textile+Company!5e0!3m2!1sen!2sid!4v1234567890"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>
`
}