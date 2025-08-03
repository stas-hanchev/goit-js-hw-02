function getElementWidth(content, padding, border) {
    const contentNumerical = Number.parseFloat(content);
    const paddingNumerical = Number.parseFloat(padding);
    const borderNumerical = Number.parseFloat(border);

    return contentNumerical + 2 * paddingNumerical + 2 * borderNumerical;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
