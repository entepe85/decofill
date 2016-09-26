'use strict';

/*global CSS, window */
var hasBoxDecorationBreak = function hasBoxDecorationBreak() {
    // We have to use this, because IE doesn't understand 'CSS.supports'
    if (window.navigator.userAgent.match(/Trident/g)) {
        return false;
    }
    return CSS.supports('( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )');
},

// FUTURE: Set hyphens (if any) to "none" and detect line wrapping by inserting <span>'s where appropriate
decoFill = function decoFill(els) {
    if (!hasBoxDecorationBreak()) {
        [].forEach.call(els, function (textEl) {
            var content = textEl.innerHTML,
                wrapTag = textEl.tagName;
            textEl.classList.add('box-decoration-polyfill');
            textEl.outerHTML = '<' + wrapTag + '>' + content.replace(/<br(\s\/)?>/g, '</' + wrapTag + '><br /><' + wrapTag + '>') + ('</' + wrapTag + '>');
        });
    }
};