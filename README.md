# Polyfill for box-decoration-break

Since the CSS3 property `box-decoration-break` is not [supported by Microsoft browsers yet](http://caniuse.com/#feat=css-boxdecorationbreak), there's a need for a polyfill.

## Usage

This polyfill was rewritten to be consumed by module bundlers or used by native ES6 imports. It is available through [NPM](https://www.npmjs.com/package/decofill).

### Example

```
import { decoFill } from "decofill";

(() => {
    let decoEls = document.querySelectorAll('.decoration-text');
    decoFill(decoEls);
})(window);
```

### How does it work?

This script slices regular paragraph elements with line breaks into separate line-breaking paragraphs which then must have separate padding applied.

### How to contribute

Just fork this repository and do `npm install`.

Make changes to `es6/decofill.js` and run `npm run build` afterwards so the script gets transpiled by Babel and output to `dist/`.
