const getSequence = (n) => {
    const seq = []


    for (let i = 2; i < 2 + n; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            seq.push(i)
        } else seq.push(1)
    }

    return seq

}
console.log(getSequence(13));
