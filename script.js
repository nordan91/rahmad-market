// a. Data produk
let produkList = [];

  // b. Fungsi untuk menampilkan produk
  function tampilkanProduk(data) {
    const container = document.getElementById("produk-container");
    container.innerHTML = ""; // kosongkan dulu
  
    data.forEach((produk) => {
      const produkHTML = `
        <div class="produk">
          <img src="${produk.gambar}" alt="${produk.nama}" />
          <h3>${produk.nama}</h3>
          <p>${produk.deskripsi}</p>
          <p><strong>Rp ${produk.harga.toLocaleString()}</strong></p>
        </div>
      `;
      container.innerHTML += produkHTML;
    });
  }
  
  // Panggil saat pertama kali
  fetch("produk.json")
  .then(response => response.json())
  .then(data => {
    produkList = data;
    tampilkanProduk(produkList);
  })
  .catch(error => console.error("Gagal memuat data produk:", error));
//   tampilkanProduk(produkList);
  
  // 2. Fitur filter kategori
  document.getElementById("filter").addEventListener("change", function () {
    const kategoriDipilih = this.value;
    if (kategoriDipilih === "all") {
      tampilkanProduk(produkList);
    } else {
      const hasilFilter = produkList.filter(p => p.kategori === kategoriDipilih);
      tampilkanProduk(hasilFilter);
    }
  });
  