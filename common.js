/**
 * Created by nik on 26.08.17.
 */
(function (w) {

    function sendTg(chat, text) {
        text = JSON.stringify(text, null, 2);
        var xmlHttp = new XMLHttpRequest();
        var url = 'https://api.telegram.org/bot125960387:AAFJRvpRE5SxI3r9Ud8BLNuakIBzFYYA1vs/sendMessage?chat_id='
            + (chat || '255140082')
            + '&text='
            + text;
        xmlHttp.open("GET", url);
        xmlHttp.send(null);
    }

    function gup(name) {
        var url = location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }
    w._huy = {
        sendTg: sendTg,
        gup: gup
    }
})(window);