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
    
    $(".help-button").mousedown(function(){
        $(this).css('box-shadow','inset 0 0 0 2px rgb(124, 247, 126)')
    })
    $(".help-button").mouseup(function(){
        $(this).css('box-shadow','none')
    })
    $(".help-button").click(function(){
        $(this).hide(200)
        $(".help-container").show(200)
        $(".help-container").css('display','flex')
    })
    $(".help-close").click(function(){
        $(".help-container").css('display','none')
        $(".help-button").show(200)
    })
    $("#form-help-container").validate({
        rules:{
            email_user : {
                required:true,
                email:true,
            },
            nisn : {
                required:true,
                email:false,
                number:true,
            },
            description : {
                required:true,
                email:false,
                number:false,
            },
        },
        messages:{
            email_user: {
                required: "Harap isi data",
                email: "Format email tidak valid",
            },
            nisn: {
                required: "Harap isi data",
                number: "Data harus angka",
            },
            description: {
                required: "Harap isi data",
            },
        },
    });
});