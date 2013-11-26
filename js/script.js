$(document).ready(function () {
    // $('#frmRegistration').validate({
    //     rules: {
    //         inputVerifyPassword: {
    //             required: true,
    //             minWidth: 2
    //         },
    //         inputEmail: {
    //             required: false
    //         }
    //     },
    //     highlight: function (element) {
    //         $(element).closest('.input-group').removeClass('success').addClass('has-error');
    //     },
    //     success: function (element) {
    //         element
    //         .text('OK!').addClass('valid')
    //         .closest('.input-group').removeClass('error').addClass('has-success');
    //     }
    // });

    // DEBUG -> Only to test Sign In button interactions
    $("#btn-signin").click(function () {
        $("#btn-signin").hide();
        $("#header-signin-error").show();
        $("#section-signin").show();
    });

    // DEBUG -> Only to test Secret Code error functionality
    $("#btn-go").click(function () {
        $("#secret-code-error").show();
    });
});

$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
});

$("#btnSearch").click(function () {
    alert($('.btn-select').text() + ", " + $('.btn-select2').text());
});