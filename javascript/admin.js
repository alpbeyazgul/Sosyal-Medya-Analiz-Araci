$(document).ready(function() {
    var veriListesiDiv = document.getElementById("veri-listesi");

    var veriler = veritabanindanVeriAl();

    for (var i = 0; i < veriler.length; i++) {
        var veriDiv = document.createElement("div");
        veriDiv.className = "veri";
        veriDiv.innerHTML = "<h2>" + veriler[i].baslik + "</h2>" +
                            "<p>" + veriler[i].detay + "</p>";

        veriListesiDiv.appendChild(veriDiv);
    }
});
