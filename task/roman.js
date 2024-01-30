function romanToInt(string) {
  // Create a lookup table for Roman numeral values
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = values[string[0]];

  for (let i = 1; i < string.length; i++) {
    const current = values[string[i]];
    const next = values[string[i +1]];
    if (current < next) {
     result-=current
    }
    else{
        result += current;
    }
  }
  return result;
}

console.log(romanToInt("IV")); // Outputs: 24
console.log(romanToInt("MCMXCIX")); // Outputs: 1999
console.log(romanToInt("MMMDCCCCLXXXXVIIII")); // Outputs: 3999
