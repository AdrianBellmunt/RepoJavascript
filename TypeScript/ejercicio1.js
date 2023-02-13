var numbers = [120, 45, 71, 156, 90];
var sum = 0;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > 100) {
        count++;
    }
}
console.log("La suma de los números es: " + sum);
console.log("Hay " + count + " números mayores de 100");
