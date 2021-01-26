// Soal nomor 1

function toko (nama, produk){
    alert("Terima kasih " +nama+ " telah membeli " +produk);
    console.log("Terima kasih " +nama+ " telah membeli " +produk);
};


// Soal nomor 2

function bagi (){
    return (9/5); 
};

function celciusToFahrenheit (a){
    document.getElementById("fahrenheit").value = a * bagi() + 32 ;
    // return a * bagi() + 32;
};

function fahrenheitToCelcius (b){
    document.getElementById("celcius").value = (b - 32) * 5 / 9;
    // return (b - 32) * 5 / 9;
};


// Soal nomor 3


let kalkulasiUmurKucing = (a) => {
    
    let hasil;

    if(a == 1){
       hasil = 15;
    } else if (a == 2) {
       hasil = 24;
    } else if (a >= 3){
       hasil = (a - 3 + 1) * 4 + 24 ;
    };

    alert("Umur kucing anda adalah " +hasil+ " tahun dalam usia manusia");

};

// nomor 4

let ubahKalimat = s => alert(s.toLowerCase());



