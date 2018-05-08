'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*global CSS, window */
var hasBoxDecorationBreak = function hasBoxDecorationBreak() {
    // We have to use this, because IE doesn't understand 'CSS.supports'
    if (window.navigator.userAgent.match(/Trident/g)) {
        return false;
    }
    return CSS.supports('( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )');
};
var decoFill = exports.decoFill = function decoFill(els) {
    if (!hasBoxDecorationBreak()) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var textEl = _step.value;

                var content = textEl.innerHTML,
                    wrapTag = textEl.tagName;
                textEl.classList.add('box-decoration-polyfill');
                textEl.outerHTML = '<' + wrapTag + '>' + content.replace(/<br(\s\/)?>/g, '</' + wrapTag + '><br /><' + wrapTag + '>') + ('</' + wrapTag + '>');
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};