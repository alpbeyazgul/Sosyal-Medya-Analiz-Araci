$(document).ready(function() {
    var kullaniciAdi = "ornek_kullanici";

    var analizSonucu = sosyalMedyaAnalizYap(kullaniciAdi);
    analizSonucunuGoster(analizSonucu);
    veritabaninaKaydet(analizSonucu);
});
