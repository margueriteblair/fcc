function factorialize(val) {
    if (val === 0 || val === 1) {
        console.log(1);
    }
    for (let i = val - 1; i > 1; i--) {
        val *= i;
    }
    console.log(val);
}
factorialize(5);

function factorialize2(val) {
    if (val === 0 || val === 1) {
        console.log(1);
    }
    let i = val - 1
    while (i > 1) {
        val *= i;
        i--;
    }
    console.log(val);
}
factorialize2(4);