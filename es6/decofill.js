/*global CSS, window */
const forEach = [].forEach,
    hasBoxDecorationBreak = () => {
        // We have to use this, because IE doesn't understand 'CSS.supports'
        if (window.navigator.userAgent.match(/Trident/g)) {
            return false;
        }
        return CSS.supports('( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )');
    },
    decoFill = els => {
        if (!hasBoxDecorationBreak()) {
            forEach.call(els, textEl => {
                let content = textEl.innerHTML;
                textEl.classList.add('box-decoration-polyfill');
                textEl.outerHTML = '<p>' + content.replace(/<br(\s\/)?>/g, '</p><br /><p>') + '</p>';
            });
        }
    };
