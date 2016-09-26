/*global CSS, window */
const hasBoxDecorationBreak = () => {
        // We have to use this, because IE doesn't understand 'CSS.supports'
        if (window.navigator.userAgent.match(/Trident/g)) {
            return false;
        }
        return CSS.supports('( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )');
    },
    // FUTURE: Set hyphens (if any) to "none" and detect line wrapping by inserting <span>'s where appropriate
    decoFill = els => {
        if (!hasBoxDecorationBreak()) {
            [].forEach.call(els, textEl => {
                let content = textEl.innerHTML,
                    wrapTag = textEl.tagName;
                textEl.classList.add('box-decoration-polyfill');
                textEl.outerHTML = `<${wrapTag}>` + content.replace(/<br(\s\/)?>/g, `</${wrapTag}><br /><${wrapTag}>`) + `</${wrapTag}>`;
            });
        }
    };
