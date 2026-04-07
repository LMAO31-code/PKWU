function simpanDraft(){

let judul = document.getElementById("judul").value
let novel = document.getElementById("novel").value

localStorage.setItem("judulNovel", judul)
localStorage.setItem("draftNovel", novel)

alert("Draft berhasil disimpan!")
}

function hapusDraft(){

localStorage.removeItem("judulNovel")
localStorage.removeItem("draftNovel")

document.getElementById("judul").value=""
document.getElementById("novel").value=""

alert("Draft dihapus")
}

function buatProposal(){

let topik = document.getElementById("topik").value
let referensi = document.getElementById("referensi").value

let hasil = `
<h4>Judul Proposal</h4>
<p>${topik}</p>

<h4>Latar Belakang</h4>
<p>Topik ini penting untuk diteliti karena memiliki dampak terhadap perkembangan ilmu pengetahuan.</p>

<h4>Referensi</h4>
<p>${referensi}</p>
`

document.getElementById("hasil").innerHTML = hasil

}

window.onload = function(){

let judul = localStorage.getItem("judulNovel")
let novel = localStorage.getItem("draftNovel")

if(judul){
document.getElementById("judul").value = judul
}

if(novel){
document.getElementById("novel").value = novel
}

}
