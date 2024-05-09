/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityInKilometersPerHour = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKilometers = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
/**
 * @param {number} acceleration - The accelearaation of tthe object im mps
 * @param {number} initialVelocityInKilometersPerHour -The initila velocaity of an object in km/h
 * @param {number} timeInSeconds - times elaspsed in seconds
 *@throws {Error}   - if any of the input is invalid we throw error
 
 *
 */
const initialVelocityMps = initialVelocityInKilometersPerHour / 3.6;
const calculateNewDistance = (
  initialVelocityInKilometersPerHour,
  acceleration,
  timeInSeconds
) => {
  return (
    initialVelocityInKilometersPerHour / 3.6 +
    0.5 * acceleration * timeInSeconds
  );
};

// Pick up an error with how the function below is called and make it robust to such errors
const calculateNewVelocityl = (vel, acc, time) => {
  //validating input
  if (
    acc < 0 ||
    vel < 0 ||
    time < 0 ||
    typeof acc !== "number" ||
    typeof vel !== "number" ||
    typeof time !== "number"
  ) {
    throw Error("All values must be positive and must be numbers");
  }

  return vel + acc * time;
};

const newVelocity = calculateNewVelocityl(
  initialVelocityMps,
  acceleration,
  timeInSeconds
); //calculates new velocity based on acceleration

const remaningFuel = fuelBurnRate * timeInSeconds; //calculates remaining fuel

//calcultes new distance
const newDistance = calculateNewDistance(
  initialVelocityInKilometersPerHour,
  acceleration,
  timeInSeconds
);

console.log(`Corrected New Velocity: ${newVelocity * 3.6} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remaningFuel} kg`);
