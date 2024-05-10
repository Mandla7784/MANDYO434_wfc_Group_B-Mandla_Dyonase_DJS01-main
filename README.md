### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

In this Project i was tasked to debug the code to make it more readable
finding calculating errors and make sure that the calculations are robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement)

The initial functions were flawed and resulted to incorrect calculations.

![alt text](mars.gif)

##### Problem Areas to Address

In line 19 there was a log error says "calcNewVel is not defined".
The calculate newvelocity function was called before initialized so i had to move it upwards .

1. **Unit Mismatch**: The provided functions fail to convert units correctly, leading to calculation inaccuracies.
   the values were not correctly converted for accurate calculations
2. **Parameter Misalignment**: Parameters are not handled in a way that prevents or highlights the potential for unit mismatch errors, leading to possible confusion.

##### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

#### My Task

1. **Was to Identify and Understand Errors**:I analysed the provided functions to determine how unit mismatches and parameter misalignments caused incorrect results.
2. **Refactor and Correct**: I Modified the functions to handle parameters more effectively, incorporating object destructuring for clarity and implementing necessary unit conversions.

#### Solution Approach

- I Used object destructuring in function parameters for better clarity.
- Implemented accurate unit conversions within the functions.
- I ensured that the corrected functions address the issues of unit mismatches and parameter clarity.

#### Debugging Guide

1. I enhanced code readability for easier debugging.
2. Identified and correct calculation errors.
3. I Improved the robustness of calculations.
