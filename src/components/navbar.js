export default function navbar() {
  return `
  <nav class="bg-sky-600 text-white px-8 py-4 shadow-md flex justify-between items-center">
    <h1 class="text-2xl font-bold tracking-wide">NGK<span class="text-sky-200">Kain</span></h1>
    <ul class="flex space-x-8">
      <li><a href="/" class="navigate-link hover:text-sky-200 transition">Home</a></li>
      <li><a href="/about" class="navigate-link hover:text-sky-200 transition">About Us</a></li>
      <li><a href="/services" class="navigate-link hover:text-sky-200 transition">Services</a></li>
      <li><a href="/products" class="navigate-link hover:text-sky-200 transition">Products</a></li>
      <li><a href="/contact" class="navigate-link hover:text-sky-200 transition">Contact</a></li>
    </ul>
  </nav>
  `;
}
