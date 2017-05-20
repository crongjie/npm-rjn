module.exports = {
    isiOS: function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent);
    },
    isAndroid: function() {
        return /(android)/i.test(navigator.userAgent);
    },
    isIE: function() {
        return userAgent.match(/(msie|MSIE)/);
    }
};