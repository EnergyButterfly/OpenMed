$(document).ready(function () {
    $('#frmRegistration').validate({
        rules: {
            inputVerifyPassword: {
                required: true,
                minWidth: 2
            },
            inputEmail: {
                required: false
            }
        },
        highlight: function (element) {
            $(element).closest('.input-group').removeClass('success').addClass('has-error');
        },
        success: function (element) {
            element
            .text('OK!').addClass('valid')
            .closest('.input-group').removeClass('error').addClass('has-success');
        }
    });
});

$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
});

$("#btnSearch").click(function () {
    alert($('.btn-select').text() + ", " + $('.btn-select2').text());
});