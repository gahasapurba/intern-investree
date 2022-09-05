while (!firstName) {
    var firstName = prompt("Masukkan Nama Depan Anda");
}
while (!lastName) {
    var lastName = prompt("Masukkan Nama Belakang Anda");
}
while (!language) {
    var language = prompt(
        "Masukkan Bahasa Yang Diinginkan (Ketik 'Inggris' Untuk Menampilkan Kalimat Dalam Bahasa Inggris / Ketik 'Indonesia' Untuk Menampilkan Kalimat Dalam Bahasa Indonesia) / Apabila Tidak Keduanya Akan Otomatis Ditampilkan Dalam Bahasa Indonesia"
    );
}

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language,
};

if (user.language === "Inggris") {
    alert("Nice To Meet You " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Indonesia") {
    alert(
        "Senang Bertemu Dengan Anda " +
            user.name.first +
            " " +
            user.name.last +
            "!"
    );
} else {
    alert(
        "Senang Bertemu Dengan Anda " +
            user.name.first +
            " " +
            user.name.last +
            "!"
    );
}
