// console.log(process.argv);
// var p = process.argv;
var sum = 0;
var p = 0;

for (var i = 0; i < process.argv.length; i++) {
  if (i >= 2) {
    p = Number(process.argv[i]);
    sum = sum + p;
  };
};

console.log(sum);
