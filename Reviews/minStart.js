function minStart(arr) {
    for (let i = 1; 1 < 100; i++) {
        if(isMinStart(arr, i)){
            return i;
        }
    }
}

function isMinStart(arr, val) {
    var acum = val;
    for (let i = 1; i < arr.length; i++) {
        acum = acum + arr[i];
        if (acum <= 0) {
            return false;
        }
    }
    return true;
}

console.log(minStart([4,1,-12,2,-5]));
