function sumNumbers(n, m) {
    n = Number(n);
    m = Number(m)
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    console.log(sum);

}
sumNumbers('1', '5')