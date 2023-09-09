const repeatString = function(str, times) {
    let result = '';
    if(times < 0) {
        result = 'ERROR';
    }
    else {
        for(let i = 0; i < times; i++) {
            result += str;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
