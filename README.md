# Polyfill for box-decoration-break

Since the CSS3 property `box-decoration-break` is not [supported by Microsoft browsers yet](http://caniuse.com/#feat=css-boxdecorationbreak), there's a need for a polyfill.

## Usage

Place the script from `dist/decofill.js` before your own JS, then call `decoFill(<elements>)`.

### Example
```
(function () {
    var decoEls = document.querySelectorAll('.decoration-text');
    decoFill(decoEls);
}(window));
```

### How does it work?
This script slices regular paragraph elements with line breaks into separate line-breaking paragraphs which then must have separate padding applied.

### How to contribute
Just fork this repository and do `npm install`.

Make changes to `es6/polyfill.js` and run `npm run build` afterwards so the script gets transpiled by Babel and output to `dist/`.
