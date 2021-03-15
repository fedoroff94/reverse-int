module.exports = function reverse(n) {
    if(n < 0){
        n = -n;
    }
    let string = n.toString();
    let arr = [];
    for(char of string){
        arr.push(char);
    }
    return +arr.reverse().join('');
};


