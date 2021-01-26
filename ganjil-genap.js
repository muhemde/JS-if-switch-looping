let pilihanStatus = true;
do {
  let pilihan = prompt("Pilih Salah Satu! Ketik Angka Saja!                                            1 Hari Besok, 2 Bilangan Genap, 3 Bilangan Ganjil, 4 Bilangan Prima");
  alert(`${pilihan}`);
  let status = true;
  while (status) {
    console.clear();
    if (pilihan == 1) {
      alert(pilihan);
      let hari = prompt("Pilih Salah Satu! Ketik Angka Saja! : 1 If-Else - 2 Switch-Case");
      if (hari) {
        if (hari == 1) {
          ifElse();
        } else if (hari == 2) {
          switchCase();
        } else {
          alert("Ketik 1 atau 2!");
        }
      } else {
        alert("Batalkan?");
      }
      status = confirm("Ulangi Lagi?");
    } else if (pilihan == 2) {
      let angka = prompt("Masukkan Angka!");
      Genap(angka);
      status = confirm("Ulangi Lagi?");
    } else if (pilihan == 3) {
      let angka = prompt("Masukkan Angka !");
      Ganjil(angka);
      status = confirm("Ulangi Lagi?");
    } else if (pilihan == 4) {
      let angka = prompt("Masukkan Angka!");
      Prima(angka);
      status = confirm("Ulangi lagi?");
    } else {
      alert("Pilih 1-4!");
      status = false;
    }
  }
  console.clear();
  alert("Batalkan?");
  pilihanStatus = confirm("Kembali ke Menu Awal?");
} while (pilihanStatus);

// If-Else
function ifElse() {
  const hari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu"];
  let namaHari = prompt("Masukkan Nama Hari!");
  let hariLower = namaHari.toLowerCase();
  let hariIni = hari.indexOf(hariLower);
  if (hariIni >= 0) {
    if (hariIni < hari.length - 1) {
      alert(hari[hariIni + 1]);
    } else {
      alert(hari[0]);
    }
  } else {
    alert("Bukan Nama Hari!");
  }
}

// Switch-Case
function switchCase() {
  let namaHari = prompt("Masukkan Nama Hari!");
  let hariLower = namaHari.toLowerCase();

  switch (hariLower) {
    case "Senin": alert("Selasa!"); break;
    case "Selasa": alert("Rabu!"); break;
    case "Rabu": alert("Kamis!"); break;
    case "Kamis": alert("Jumat!"); break;
    case "Jumat": alert("Sabtu!"); break;
    case "Sabtu": alert("Minggu!"); break;
    case "Minggu": alert("Senin!"); break;
    default: alert("Bukan Nama Hari!"); break;
  }
}

// Bilangan Genap
function Genap(number) {
  let angka = parseInt(number);
  if (angka) {
    for (let index = 0; index < angka; index++) {
      index % 2 == 0 ? alert(index) : index;
    }
  } else {
    alert("Masukkan Angka!");
  }
}

// Bilangan Ganjil
function Ganjil(number) {
  let angka = parseInt(number);
  if (angka) {
    for (let index = 0; index < angka; index++) {
      index % 2 != 0 ? alert(index) : index;
    }
  } else {
    alert("Masukkan Angka!");
  }
}

// Bilangan Prima
function Prima(number) {
  let angka = parseInt(number);
  let cek;
  if (angka && angka >= 0) {
    for (let i = 2; i < angka; i++) {
      cek = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) cek = false;
      }
      cek == true ? alert(i) : i;
    }
  } else {
    alert("Masukkan Angka!");
  }
}