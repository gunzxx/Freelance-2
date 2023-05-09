$(document).ready(function () {
    // Event untuk tombol show password
    $("#icon-hide").click(function(event) {
        event.preventDefault(); // menonaktifkan perilaku bawaan pada element
        if($('#show_hide_password input').attr("type") == "text"){ // mengecek jika type input == text
            $('#show_hide_password input').attr('type', 'password'); // mengubah type input jadi password
            $('#icon-hide').html('<i class="far fa-eye"></i>'); // mengganti ikon
        }else if($('#show_hide_password input').attr("type") == "password"){ // mengecek jika type input == password
            $('#show_hide_password input').attr('type', 'text'); // mengubah type input jadi text
            $('#icon-hide').html('<i class="far fa-eye-slash"></i>'); // mengganti ikon
        }
    });

    // memverifikasi input dengan id no_pendaftaran agar dapat menerima angka
    $('#no_pendaftaran').inputmask("9{4}.[A|9]{3}.9{5}.9{4}.9{3}");
});