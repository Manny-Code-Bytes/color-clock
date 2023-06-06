// TODO: refactor color-change code to be more modular
// Move the getColor function outside of the scope and make it a standalone function that accepts the CSS variable name as a parameter. This allows you to reuse it in other parts of your code
function getColor(cssVariable){
    return getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
}
