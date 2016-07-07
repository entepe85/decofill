'use strict';

/*global CSS, window */
var forEach = [].forEach,
    hasBoxDecorationBreak = function hasBoxDecorationBreak() {
    // We have to use this, because IE doesn't understand 'CSS.supports'
    if (window.navigator.userAgent.match(/Trident/g)) {
        return false;
    }
    return CSS.supports('( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )');
},
    decoFill = function decoFill(els) {
    if (!hasBoxDecorationBreak()) {
        forEach.call(els, function (textEl) {
            var content = textEl.innerHTML;
            textEl.classList.add('box-decoration-polyfill');
            textEl.outerHTML = '<p>' + content.replace(/<br(\s\/)?>/g, '</p><br /><p>') + '</p>';
        });
    }
};