const Waktu = [
    {
        waktu: 'Pagi',
        value: '08:00'
    },
    {
        waktu: 'Siang',
        value: '12:30'
    },
    {
        waktu: 'Sore',
        value: '15:30'
    },
]

const Layanan = [
    {   
        key: 'a',
        harga: 20000,
        kelas: "Ekonomi",
    },
    {
        key: 'b',
        harga: 40000,
        kelas: "Bisnis",
    },
    {   
        key: 'c',
        harga: 65000,
        kelas: "Ekspress",
    },
    {
        key: 'd',
        harga: 100000,
        kelas: "Elit",
    },
]
const Pelabuhan = [
    {
        key: "BB",
        title: "Boom Baru",
        kota: "Palembang"
    },
    {
        key: "TA",
        title: "Tanjung Api Api",
        kota: "Banyuasin"
    },
    {
        key: "Ci",
        title: "Cirbeon",
        kota: "Jawa Barat"
    },
    {
        key: "GA",
        title: "Gorontalo dan Angrek",
        kota: "Gorontalo"
    },
    {
        key: "Bl",
        title: "Blitung",
        kota: "Bitung"
    },
    {
        key: "TP",
        title: "Tanjung Priok",
        kota: "Jakarta"
    },
]

const Jadwal = [
    {
        key: '1',
        asal: 'Boom Baru',
        tujuan: 'Cirbeon',
        waktu: 'Pagi',
        layanan: 'Ekspress',
        tanggal: '31-03-2022'
    },
    {
        key: '2',
        asal: 'Tanjung Api Api',
        tujuan: 'Tanjung Priok',
        waktu: 'Sore',
        layanan: 'Bisnis',
        tanggal: '31-03-2022'
    },
    {
        key: '3',
        asal: 'Boom Baru',
        tujuan: 'Gorontalo dan Angrek',
        waktu: 'Siang',
        layanan: 'Ekspress',
        tanggal: '31-03-2022'
    },
    {
        key: '4',
        asal: 'Boom Baru',
        tujuan: 'Gorontalo dan Angrek',
        waktu: 'Pagi',
        layanan: 'Ekonomi',
        tanggal: '31-03-2022'
    },
    {
        key: '5',
        asal: 'Tanjung Priok',
        tujuan: 'Cirbeon',
        waktu: 'Pagi',
        layanan: 'Elit',
        tanggal: '31-03-2022'
    },
    {
        key: '6',
        asal: 'Tanjung Priok',
        tujuan: 'Gorontalo dan Angrek',
        waktu: 'Siang',
        layanan: 'Ekspress',
        tanggal: '31-03-2022'
    },
]

export {Layanan, Pelabuhan, Waktu, Jadwal}