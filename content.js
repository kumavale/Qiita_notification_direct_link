
window.onload = function() {
    var naw = document.querySelectorAll(".notification_actionWrapper");

    for(let i=0, j=naw.length; i<j; ++i) {
        let span = naw[i].firstElementChild;
        let user = span.innerHTML;
        span.innerHTML = "<a href='https://qiita.com/" + user + "' target='_parent'>" + user + "</a>";
    }
};
