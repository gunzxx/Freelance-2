$(document).ready(function () {
    $("#icon-hide").click(function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#icon-hide').html('<i class="far fa-eye"></i>');
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#icon-hide').html('<i class="far fa-eye-slash"></i>');
        }
    });
    $('#no_pendaftaran').inputmask("9{4}.[A|9]{3}.9{5}.9{4}.9{3}");
});