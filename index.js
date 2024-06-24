const Cube = require('./Cube');

const args = process.argv;

const alg = args[2];
const size = args[3] || 3;
const invert = ['--invert', '-i'].indexOf(args[4]) > -1;

const cube = new Cube(size);
if (invert) {
    cube.applyAlg(alg);
} else {
    cube.applyCase(alg);
}

console.log(cube.render());