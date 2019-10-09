module.exports = function multiply(first, second) {
    let str = "empty";
    str = (BigInt(first) * BigInt(second)).toString();
    return str.substring(0, str.length);
}
