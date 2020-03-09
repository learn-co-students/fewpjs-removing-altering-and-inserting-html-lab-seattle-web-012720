function checkPermutation(array) {
    if (array[0].length == array[1].length) {
        let permutation = false;
        for(let i = 0; i < array[0].length; i++) {
            let match = false;
            for(let j = 0; j < array[1].length; j++) {
                if (array[1][j] == array[0][i]) {
                    match = true;
                }
            }
            permutation = match;
        }
        return permutation;
    } else {
        return false;
    }
}

console.log(checkPermutation(["TAB", "BAT"]));

console.log(checkPermutation(["BEER", "REBE"]));

console.log(checkPermutation(["RAT", "BAT"]));
