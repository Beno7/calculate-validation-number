function calculateValidationNumber(input) {
  let sum = 0;
  do sum += input % 10;
  while ((input = ~~(input / 10)) > 0);
  return sum < 10 ? sum : calculateValidationNumber(sum);
}

console.log('Calculate Validation Number');
console.log(calculateValidationNumber(444444));
console.log(calculateValidationNumber(1234));
console.log(calculateValidationNumber(23478998));
