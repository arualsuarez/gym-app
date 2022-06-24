let userAccessCount = 0;
let userAccessQuota = 5;

let refreshUserStats = function () {
    let remaining = userAccessQuota - userAccessCount;

    $('#user-access-count').text(userAccessCount);
    $('#user-access-remaining-count').text(remaining);
};

let showError = function(show) {
    let $error = $('#error');

    if (show) {
        $error.addClass('visible').removeClass('invisible');
    } else {
        $error.addClass('invisible').removeClass('visible');
    }
};

let accessGym = function() {
    if (userAccessCount >= userAccessQuota) {
        showError(true);
        return;
    }

    userAccessCount += 1;
    refreshUserStats();
    showError(false);
};

let increaseQuota = function () {
    let bonus = parseInt($('#bonus').val());

    userAccessQuota = (userAccessQuota + bonus);
};

$(function(){
    refreshUserStats();
    $('#access-gym').on('click', accessGym);
    $('#add-bonus').on('click', function() {
        increaseQuota();
        refreshUserStats();
    });
});
