const now = () => {
    const rightNow = new Date();
    return rightNow.getTime();
};

const getTimeExec = (callback) => {
    const begin = now();
    console.log("getTimeExec , begin:", begin);
    callback();
    const end = now();
    console.log("getTimeExec , end:", end);
    return `${(end - begin) / 1000} s écoulées`;
};

const add = (a, b) => {
    return a + b;
};
const addArr = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

const facto = (n) => {
    if (n === 0) return 1;
    return n * facto(n - 1);
};

console.log(getTimeExec(() => facto(500)));
