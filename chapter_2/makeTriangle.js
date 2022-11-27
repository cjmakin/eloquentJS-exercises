// Write a loop that makes seven calls to console.log to output the following triangle:
// 
// #
// ##
// ###
// ####
// #####
// ######
// #######

function makeTriangle(char, height) {

    out = char
    for (let i = 0; i < height; i++) {
        console.log(out);
        out += char;

    }
}

makeTriangle('#', 10);