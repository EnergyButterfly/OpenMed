$(document).ready(function () {
    var jsonData = [];
    var ms4 = $('#ms4').magicSuggest({
        data: [{ id: 1, label: 'one' }, { id: 2, label: 'two' }, { id: 3, label: 'three' }],
        displayField: 'label',
        value: [1, 3]
    });


    $('#btnBack').on('click', function () {
        document.location = "registration.html";
    });
    $("#inputLastPhone").on('click', function () {
        $("#notificationMessage").removeClass("hidden");
    });

    function hideNotificationMessage(nextStep) {
        if (nextStep == 1) {
            $("#verifyStep1Container").removeClass("hidden");
            $("#verifyStep2Container").addClass("hidden");
            $("#notificationMessage").addClass("hidden");
        }
        if (nextStep == 2) {
            $("#verifyStep1Container").addClass("hidden");
            $("#verifyStep2Container").removeClass("hidden");
        }
    }
    $("#btnCancelVerify").on('click', function () {
        hideNotificationMessage(1);
    });
    $("#btnVerify").on('click', function () {
        hideNotificationMessage(2);
    });
    $("#btnSubmit").on('click', function () {
        hideNotificationMessage(1);
    });
    $("#btnCancelSubmit").click(function () {
        hideNotificationMessage(1);
    });
});