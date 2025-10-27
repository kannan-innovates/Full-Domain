const car = {};

Object.defineProperty(car, 'brand', {
  value: 'Porsche',
  writable: false,      // ❌ cannot change
  enumerable: true,     // ✅ shows up in loops
  configurable: false   // ❌ cannot delete or redefine
});

console.log(car.brand); // Porsche

car.brand = 'Ferrari';  // ❌ won't change
console.log(car.brand); // still "Porsche"

for (let key in car) console.log(key); // ✅ shows "brand"
delete car.brand;       // ❌ fails silently (strict mode throws error)