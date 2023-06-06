// TODO: refactor color-change code to be more modular
// Move the getColor function outside of the scope and make it a standalone function that accepts the CSS variable name as a parameter. This allows you to reuse it in other parts of your code
function getColor(cssVariable){
    return getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
}
// Instead of individually defining color1, color2, etc., you can store the colors in an array or object to make it more scalable. Here's an example using an array
const colors = [
    getColor('--c1'),
    getColor('--c2'),
    getColor('--c3'),
    getColor('--c4'),
    getColor('--c5'),
    getColor('--c6'),
    getColor('--c7'),
    getColor('--c8'),
    getColor('--c9'),
];
// Update the gradient object to use the colors array. This way, you can easily add or remove colors without modifying the code
const gradient = {
    morning: `linear-gradient(${colors.slice(0,3)})`,
    afternoon: `linear-gradient(${colors.slice(3,6)})`,
    night: `linear-gradient(${colors.slice(6)})`
}
// Modify the colorChange function to accept a parameter representing the current time. This allows you to reuse the function with different time values
function colorChange(currentTime){
    (currentTime >= 15 && currentTime <= 30) ? document.body.style.background = gradient.morning :
    (currentTime > 30 && currentTime < 45 ) ? document.body.style.background = gradient.afternoon :
    document.body.style.background = gradient.night;


}