// function salam(){
//     return "Assalamualaikum";
// }

// let pesan = salam();

// function penjumlahan(){
//     return 10+5;
// }

// console.log(penjumlahan());


// console.log(perkalian(8, 5));

// function perkalian(bil1, bil2){
//     return bil1 * bil2;
// }

const olahraga = "basketball"; // global

function namaAtlet(){
    let atlet = "Leo Messi"; //local
    const noMessi = 10;      //local
    console.log(olahraga);
    if (olahraga === 'basketball'){
        atlet = 'Kobe Briant';
        const noKobe = 24;
        console.log(olahraga);
    }
    return atlet;
}

console.log(namaAtlet());
console.log(olahraga);
console.log(atlet);
