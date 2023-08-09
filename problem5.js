function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) === true || typeof totalDue !== "number") {
        return "first input is not an array or second input is not a number";
    }
    else if (changeArray.length === 0) {
        return "empty array"
    }
    else if (totalDue < 0) {
        return "only positive number is allowed for price"
    }
    else {
        let sumArray = 0;
        for (let items of changeArray) {
            if (items < 0 || typeof items !== "number") {
                return "only positive number is allowed for array";
            }
            else {
                sumArray += items;
            }
        }
        console.log(sumArray)
        if(sumArray >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}
const x = [1, 3];
const y = 10;
const output = canPay(x, y);
console.log(output);