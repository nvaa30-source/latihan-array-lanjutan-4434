const daftarBuku = ["HTML Dasar", "CSS Dasar", "JavaScript Dasar", "PHP Dasar"];

console.log("Awal:", daftarBuku);

daftarBuku.splice(daftarBuku.indexOf("CSS Dasar"), 1, "CSS Modern");
daftarBuku.splice(daftarBuku.indexOf("JavaScript Dasar") + 1, 0, "Git Dasar");
daftarBuku.splice(daftarBuku.indexOf("PHP Dasar"), 1);

console.log("Terbaru:", daftarBuku, " Total:", daftarBuku.length);