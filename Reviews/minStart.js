function minStart(arr) {
    const qtty = arr.shift(); // the first value indicates the number of valid elements in the array
    const conditionalValue = Math.max(...arr) + Math.min(...arr);
    let limits = conditionalValue > 0 
        ? {i: 0, lim: conditionalValue} 
        : {i: Math.abs(conditionalValue), lim: qtty + Math.abs(arr.reduce((ant, act) => ant + act))};

    for (let i = limits.i; i < limits.lim; i++) {
        if(isMinStart(arr, i)){
            return i;
        }
    }
}

function isMinStart(arr, val) {
    return arr.reduce((ant, act) => ant + act , val) > 0;
}

// console.log(minStart([4,1,-12,2,-5]));
console.log(minStart([39383, 930040, -580811, 942601, -942662, 189554, 344996, -577108, 165419, 836081]));
