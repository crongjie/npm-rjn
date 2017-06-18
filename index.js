module.exports = {
    isiOS: function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent);
    },
    isAndroid: function() {
        return /(android)/i.test(navigator.userAgent);
    },
    isIE: function() {
        return /(MSIE)/i.test(navigator.userAgent);
    },
    isObject: function(obj) {
        return obj != null && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]';
    }
};