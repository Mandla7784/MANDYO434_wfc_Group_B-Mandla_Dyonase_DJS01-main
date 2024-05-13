### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 serves as a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge simulates similar scenarios in a spacecraft navigation system, emphasizing the need for accuracy in calculations.

#### Challenge Overview

In this project, my task was to debug the provided code to enhance readability, fix calculation errors, and ensure robustness in calculations. The initial functions were flawed and resulted in incorrect outcomes.

##### Problem Areas to Address

One major issue was encountered in line 19, where a log error stated "calcNewVel is not defined". Upon investigation, it was found that the `calculateNewVelocity` function was called before initialized, necessitating a move upwards.

1. **Unit Mismatch**: The provided functions failed to convert units correctly, leading to calculation inaccuracies. The values were not correctly converted for accurate calculations.
2. **Parameter Misalignment**: Parameters were not handled effectively, potentially causing confusion and errors.

##### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48,880 km/h after correction.
- **New Distance**: Approximately 10,000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

#### My Task

1. **Identification and Understanding of Errors**: Analyzed the provided functions to determine how unit mismatches and parameter misalignments caused incorrect results.
2. **Refactor and Correct**: Modified the functions to handle parameters more effectively, incorporating object destructuring for clarity and implementing necessary unit conversions.

#### Solution Approach

- Utilized object destructuring in function parameters for better clarity.
- Implemented accurate unit conversions within the functions.
- Ensured that the corrected functions address the issues of unit mismatches and parameter clarity.

#### Debugging Guide

1. Enhanced code readability for easier debugging.
2. Identified and corrected calculation errors.
3. Improved the robustness of calculations to handle potential errors effectively.
