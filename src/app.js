function addNum(n1, n2) {
    return n1 + n2;
}
// the function above must always return a number
function addStr(n1, n2) {
    return n1.toString() + n2.toString();
}
// this function is expected to return a string even though numbers were passed as arguments into it. 
// therefore the return was converted into string manually.
var printResult = function (num1, num2) {
    console.log(num1 + num2);
};
printResult(15, 30);
// Void types can be passed into functions that have no return statement.
