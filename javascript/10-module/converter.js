// Create a function that converts mph to kmh
const convertToKmh = miles => miles * 1.609344;

// Export that function to use it as a module
module.exports.convertSpeed = convertToKmh;