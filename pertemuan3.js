// // const emNode = document.getElementById("emTag");

// // console.log(emNode.nodeName);
// // console.log(emNode.nodeType);
// // console.log(emNode.childNodes);
// // console.log(emNode.textContent);

// // emNode.textContent = "Document Object";

// // const h1Node = document.getElementById("Judul");

// // console.log(h1Node.nodeName);
// // console.log(h1Node.nodeType);
// // console.log(h1Node.childNodes);
// // console.log(h1Node.textContent);

// // h1Node.textContent = "Belajar Document Object";

// /* Menggunakan method appendChild */
// // Buat Elemen baru
// const pBaru = document.createElement('')
// const teksBaru = document.createTextNode('Teks Baru');
// //Simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksBaru);
// // Simpan pBaru di akhir Section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);
// // Menggunakan method insertBefore
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);
// const ul = document.querySelector('section#bul');
// const li2 - ul.querySelector('li:nth-child(2) ');
// ul.insertBefore(liBaru, li2);
// // Menghapus Child <a> dengan removeChild
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);
// // Mengganti "Bahasa Pemrograman" dengan replaceChild
// const sectionB = document.getElementById('b');
// const p2 = sections.querySelector('p');
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Jenis-Jenis Bahasa Pemrograman');
// h2Baru.appendChild(teksH2Baru);
// sections. replaceChild (h2Baru, p2);

let h1Node = document.getElementById("Judul");
h1Node.style.backgroundColor = "yellow";
h1Node.style.fontSize = "1.4em" ;
h1Node.style.textDecoration = "undeline";
h1Node.style.textAlign = "center";

let sNode = document.querySelector("section");
sNode.style.alignContent = "center",
sNode.style.backgroundColor = "floralwhite";