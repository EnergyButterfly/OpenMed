$(document).ready(function () {
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