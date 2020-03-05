/*global CSS, window */
const hasBoxDecorationBreak = () => {
    // We have to use this, because IE doesn't understand 'CSS.supports'
    if (window.navigator.userAgent.match(/Trident/g)) {
        return false;
    }
    return CSS.supports(
        "( box-decoration-break: clone ) or ( -webkit-box-decoration-break: clone )"
    );
};
export const decoFill = els => {
    if (!hasBoxDecorationBreak()) {
        for (let textEl of els) {
            let content = textEl.innerHTML,
                wrapTag = textEl.tagName;
            textEl.outerHTML =
                `<${wrapTag} class="box-decoration-polyfill">` +
                content.replace(
                    /<br(\s\/)?>/g,
                    `</${wrapTag}><br /><${wrapTag} class="box-decoration-polyfill">`
                ) +
                `</${wrapTag}>`;
        }
    }
};
