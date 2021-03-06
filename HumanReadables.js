/**
 * Functions to convert raw signal names, error codes, and error locations
 * (or numeric IDs) into human-readable descriptions and names.
 * Generated from this spreadsheet:
 * https://docs.google.com/spreadsheets/d/1sHQNTC5f5sg6j5DD4OKjuQykpIM3z16uetWT9YuB9PQ/edit#gid=589366724
 */

// converts a raw signal name (string) to a human-readable equivalent name
export function signalToName(signalName) {
    return handleNotInObj(signalName, signalNames) || signalNames[signalName];
}

// converts a raw signal name (string) to a human-readable title-text-like description
export function signalToDescription(signalName) {
    return handleNotInObj(signalName, signalDescriptions) || signalDescriptions[signalName];
}

// converts a numeric error code to its string name
export function errorCodeToName(ecode) {
    return handleNotInObj(ecode, ecodeNames) || ecodeNames[ecode];
}

// converts a numeric error code to its human-readable description
export function errorCodeToDescription(ecode) {
    return errorCodeNameToDescription(errorCodeToName(ecode));
}

// converts an error code string name to its human-readable description
export function errorCodeNameToDescription(ecodeName) {
    return handleNotInObj(ecodeName, ecodeDescriptions) || ecodeDescriptions[ecodeName];
}

// converts a numeric error location to its string name
export function errorLocToName(eloc) {
    return handleNotInObj(eloc, elocNames) || elocNames[eloc];
}

// converts a numeric error location to its human-readable description
export function errorLocToDescription(eloc) {
    return errorLocNameToDescription(errorLocToName(eloc));
}

// converts an error location string name to its human-readable description
export function errorLocNameToDescription(elocName) {
    return handleNotInObj(elocName, elocDescriptions) || elocDescriptions[elocName];
}

/* helpers */
function handleNotInObj(key, obj) {
    // note "null in obj" always returns false
    if (key in obj) {
        return null;
    } else {
        return "[undefined]";
    }
}

/* mappings */
// use the following regular expressions to update these from this spreadsheet:
// https://docs.google.com/spreadsheets/d/1sHQNTC5f5sg6j5DD4OKjuQykpIM3z16uetWT9YuB9PQ/edit#gid=589366724

// regular expression: (\w+)\t(.*) -> "$1": "$2",
var signalNames = {
    "L1_REF": "LiOn #1 Voltage",
    "L2_REF": "LiOn #2 Voltage",
    "LREF_AVG": "LiOn Average Voltage",
    "L1_SNS": "LiOn #1 Current",
    "L2_SNS": "LiOn #2 Current",
    "L1_TEMP": "LiOn #1 Temperature",
    "L2_TEMP": "LiOn #2 Temperature",
    "LTEMP_AVG": "Average Battery Temperature",
    "PANELREF": "Solar Panel Voltage",
    "L_REF": "Active LiOn Voltage",
    "LF1REF": "LiFePo #1 Voltage",
    "LF2REF": "LiFePo #2 Voltage",
    "LF3REF": "LiFePo #3 Voltage",
    "LF4REF": "LiFePo #4 Voltage",
    "LFREF_AVG": "Average LiFePo Voltage",
    "L1_RUN_CHG": "LiOn #1 Charge Setting",
    "L2_RUN_CHG": "LiOn #2 Charge Setting",
    "LF_B1_RUN_CHG": "LiFePo Bank #1 Charge Setting",
    "LF_B2_RUN_CHG": "LiFePo Bank #2 Charge Setting",
    "LF_B1_CHGN": "LiFePo Bank #1 Charging",
    "LF_B2_CHGN": "LiFePo Bank #2 Charging",
    "LF_B1_FAULTN": "LiFePo Bank #2 Fault Indicator",
    "LF_B2_FAULTN": "LiFePo Bank #1 Fault Indicator",
    "L1_ST": "LiOn #1 Discharging",
    "L2_ST": "LiOn #2 Discharging",
    "L1_DISG": "LiOn #1 Discharge Setting",
    "L2_DISG": "LiOn #2 Discharge Setting",
    "L1_CHGN": "LiOn #1 Charging",
    "L2_CHGN": "LiOn #2 Charging",
    "L1_FAULTN": "LiOn #1 Fault Indicator",
    "L2_FAULTN": "LiOn #2 Fault Indicator",
    "RAD_TEMP": "Radio Temperature",
    "IMU_TEMP": "IMU Temperature",
    "IR_FLASH_AMB": "Ambient Infrared Sensor (Flash Panel)",
    "IR_SIDE1_AMB": "Ambient Infrared Sensor (Side Panel 1)",
    "IR_SIDE2_AMB": "Ambient Infrared Sensor (Side Panel 2)",
    "IR_RBF_AMB": "Ambient Infrared Sensor (RBF Panel)",
    "IR_ACCESS_AMB": "Ambient Infrared Sensor (Access Panel)",
    "IR_TOP1_AMB": "Ambient Infrared Sensor (Top Panel)",
    "IR_AMB_AVG": "Average Infrared Ambient Temperature",
    "IR_FLASH_OBJ": "Object Infrared Sensor (Flash Panel)",
    "IR_SIDE1_OBJ": "Object Infrared Sensor (Side Panel 1)",
    "IR_SIDE2_OBJ": "Object Infrared Sensor (Side Panel 2)",
    "IR_RBF_OBJ": "Object Infrared Sensor (RBF Panel)",
    "IR_ACCESS_OBJ": "Object Infrared Sensor (Access Panel)",
    "IR_TOP1_OBJ": "Object Infrared Sensor (Top Panel)",
    "PD_TOP1": "Photo Diode (Top Panel)",
    "PD_SIDE1": "Photo Diode (Side Panel 1)",
    "PD_SIDE2": "Photo Diode (Side Panel 2)",
    "PD_FLASH": "Photo Diode (Flash Panel)",
    "PD_ACCESS": "Photo Diode (Access Panel)",
    "PD_RBF": "Photo Diode (RBF Panel)",
    "ANTENNA_DEPLOYED": "Antenna Deployed",
    "LION_1_CHARGED": "LiOn #1 Charged",
    "LION_2_CHARGED": "LiOn #2 Charged",
    "LIFEPO4_B1_CHARGED": "LiFePo Bank #1 Charged",
    "LIFEPO4_B2_CHARGED": "LiFePo Bank #2 Charged",
    "FIRST_FLASH": "First Flash Occured",
    "PROG_MEM_REWRITTEN": "Program Memory Rewritten",
    "accelerometer1X": "Accelerometer X",
    "accelerometer1Y": "Accelerometer Y",
    "accelerometer1Z": "Accelerometer Z",
    "accelerometer2X": "Accelerometer X",
    "accelerometer2Y": "Accelerometer Y",
    "accelerometer2Z": "Accelerometer Z",
    "gyroscopeX": "Gyroscope X",
    "gyroscopeY": "Gyroscope Y",
    "gyroscopeZ": "Gyroscope Z",
    "magnetometer1X": "Magnetometer X",
    "magnetometer1Y": "Magnetometer Y",
    "magnetometer1Z": "Magnetometer Z",
    "magnetometer2X": "Magnetometer X",
    "magnetometer2Y": "Magnetometer Y",
    "magnetometer2Z": "Magnetometer Z",    
    "LFB1SNS": "LiFePo Bank #1 Current",
    "LFB2SNS": "LiFePo Bank #2 Current",
    "LFB1OSNS": "LiFePo Bank #1 Output Current",
    "LFB2OSNS": "LiFePo Bank #2 Output Current",
    "LFBSNS_AVG": "Average LiFePo Current",
    "LF1_TEMP": "LiFePo #1 Temperature",
    "LF3_TEMP": "LiFePo #3 Temperature",
    "LED1SNS": "LED #1 Current",
    "LED2SNS": "LED #2 Current",
    "LED3SNS": "LED #3 Current",
    "LED4SNS": "LED #4 Current",
    "LEDSNS_AVG": "Average LED Current",
    "LED1TEMP": "LED #1 Temperature",
    "LED2TEMP": "LED #2 Temperature",
    "LED3TEMP": "LED #3 Temperature",
    "LED4TEMP": "LED #4 Temperature",
    "LEDTEMP_AVG": "Average LED Temperature",
    "FLASH_KILLED": "Flashing Remotely Disabled",
    "MRAM_CPY": "Program Memory Rewritten",
    "satellite_state": "Satellite State",
    "num_errors": "Number of Errors",
    "timestamp": "Satellite Timestamp",
}

// regular expression: (\w+)\t(.*) -> "$1": "$2",
var signalDescriptions = {
    "L1_REF": "Voltage of one of the satellite's primary LiOn batteries",
    "L2_REF": "Voltage of one of the satellite's primary LiOn batteries",
    "L1_SNS": "Current flow from one of the satellite's primary LiOn batteries",
    "L2_SNS": "Current flow from one of the satellite's primary LiOn batteries",
    "L1_TEMP": "Temperature of one of the satellite's primary LiOn batteries",
    "L2_TEMP": "Temperature of one of the satellite's primary LiOn batteries",
    "PANELREF": "Voltage on the satellite's solar panels",
    "L_REF": "Voltage of the LiOn battery currently powering the satellite (only one powers it at a time)",
    "LF1REF": "Voltage of one of the satellite's high-current-capacity LiFePo batteries",
    "LF2REF": "Voltage of one of the satellite's high-current-capacity LiFePo batteries",
    "LF3REF": "Voltage of one of the satellite's high-current-capacity LiFePo batteries",
    "LF4REF": "Voltage of one of the satellite's high-current-capacity LiFePo batteries",
    "L1_RUN_CHG": "Whether this LiOn is set to charge off the solar panels",
    "L2_RUN_CHG": "Whether this LiOn is set to charge off the solar panels",
    "LF_B1_RUN_CHG": "Whether this LiFePo Bank is set to charge off the solar panels",
    "LF_B2_RUN_CHG": "Whether this LiFePo Bank is set to charge off the solar panels",
    "LF_B1_CHGN": "Whether this LiFePo Bank is charging off the solar panels",
    "LF_B2_CHGN": "Whether this LiFePo Bank is charging off the solar panels",
    "LF_B1_FAULTN": "Whether the charge controller for this LiFePo Bank is experiencing a fault (critical battery charging failure)",
    "LF_B2_FAULTN": "Whether the charge controller for this LiFePo Bank is experiencing a fault (critical battery charging failure)",
    "L1_ST": "Whether this LiOn battery is discharging (i.e. powering the satellite)",
    "L2_ST": "Whether this LiOn battery is discharging (i.e. powering the satellite)",
    "L1_DISG": "Whether this LiOn battery is set to discharge (i.e. power the satellite)",
    "L2_DISG": "Whether this LiOn battery is set to discharge (i.e. power the satellite)",
    "L1_CHGN": "Whether this LiOn battery is charging off the solar panels",
    "L2_CHGN": "Whether this LiOn battery is charging off the solar panels",
    "L1_FAULTN": "Whether the charge controller for this LiOn battery is experiencing a fault (critical battery charging failure)",
    "L2_FAULTN": "Whether the charge controller for this LiOn battery is experiencing a fault (critical battery charging failure)",
    "RAD_TEMP": "The temperature of the satellite's radio",
    "IMU_TEMP": "The temperature of the satellite's intertial measurement unit (a good measure of the temperature of critical electronics)",
    "IR_FLASH_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_SIDE1_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_SIDE2_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_RBF_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_ACCESS_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_TOP1_AMB": "Ambient temperature at the sensor (in space, this only measures the temperature of the satellite itself)",
    "IR_FLASH_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "IR_SIDE1_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "IR_SIDE2_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "IR_RBF_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "IR_ACCESS_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "IR_TOP1_OBJ": "Temperature of infrared-radiating objects directly in front of this sensor (used to measure direction of sun and earth)",
    "PD_TOP1": "Brightness in the direction of this sensor",
    "PD_SIDE1": "Brightness in the direction of this sensor",
    "PD_SIDE2": "Brightness in the direction of this sensor",
    "PD_FLASH": "Brightness in the direction of this sensor",
    "PD_ACCESS": "Brightness in the direction of this sensor",
    "PD_RBF": "Brightness in the direction of this sensor",
    "ANTENNA_DEPLOYED": "Whether the antenna was successfully deployed yet",
    "LION_1_CHARGED": "Whether the first LiOn battery acheived full charge",
    "LION_2_CHARGED": "Whether the second LiOn battery acheived full charge",
    "LIFEPO4_B1_CHARGED": "Whether the first LiFePo battery bank acheived full charge",
    "LIFEPO4_B2_CHARGED": "Whether the second LiFePo battery bank acheived full charge",
    "FIRST_FLASH": "Whether the satellite has flashed at least once",
    "PROG_MEM_REWRITTEN": "Whether the program memory was rewritten from radiation-safe memory to correct radiation-related data errors",
    "accelerometer1X": "X axis satellite acceleration in G",
    "accelerometer1Y": "Y axis satellite acceleration in G",
    "accelerometer1Z": "Z axis satellite acceleration in G",
    "accelerometer2X": "X axis satellite acceleration in G",
    "accelerometer2Y": "Y axis satellite acceleration in G",
    "accelerometer2Z": "Z axis satellite acceleration in G",
    "gyroscopeX": "Rate of rotation of the satellite on X axis in deg/s",
    "gyroscopeY": "Rate of rotation of the satellite on Y axis in deg/s",
    "gyroscopeZ": "Rate of rotation of the satellite on Z axis in deg/s",
    "magnetometer1X": "X axis magnetic field magnitude measurements in Gauss",
    "magnetometer1Y": "Y axis magnetic field magnitude measurements in Gauss",
    "magnetometer1Z": "Z axis magnetic field magnitude measurements in Gauss",    
    "magnetometer2X": "X axis magnetic field magnitude measurements in Gauss",
    "magnetometer2Y": "Y axis magnetic field magnitude measurements in Gauss",
    "magnetometer2Z": "Z axis magnetic field magnitude measurements in Gauss",   
    "LFB1SNS": "The current exiting a LiFePo bank (two batteries in series)",
    "LFB2SNS": "The current exiting a LiFePo bank (two batteries in series)",
    "LFB1OSNS": "The current exiting or entering a LiFePo bank (two batteries in series; measured before a diode)",
    "LFB2OSNS": "The current exiting or entering a LiFePo bank (two batteries in series; measured before a diode)",
    "LF1_TEMP": "Temperature of one of the satellite's LiFePo batteries",
    "LF3_TEMP": "Temperature of one of the satellite's LiFePo batteries",
    "LED1SNS": "The current entering one of the satellite's high-power LEDs",
    "LED2SNS": "The current entering one of the satellite's high-power LEDs",
    "LED3SNS": "The current entering one of the satellite's high-power LEDs",
    "LED4SNS": "The current entering one of the satellite's high-power LEDs",
    "LED1TEMP": "The temperature of one of the satellite's high-power LEDs",
    "LED2TEMP": "The temperature of one of the satellite's high-power LEDs",
    "LED3TEMP": "The temperature of one of the satellite's high-power LEDs",
    "LED4TEMP": "The temperature of one of the satellite's high-power LEDs",
    "FLASH_KILLED": "Whether the satellite's LEDs have been disabled from the ground",
    "MRAM_CPY": "Whether the program memory was rewritten from radiation-safe memory to correct radiation-related data errors on last reboot",
    "satellite_state": "Current high-level state (mode) of the satellite",
    "num_errors": "The total number of error codes the satellite currently has stored (some may have been overwritten; maximum is 50)",
    "timestamp": "The satellite's internal clock. Approximately the number of seconds since the satellite booted",
}

// regular expression: (.*) -> "$1",
var ecodeNames = [
    "ECODE_OK",
    "ECODE_VALID_DATA",
    "ECODE_NO_CHANGE",
    "ECODE_ABORTED",
    "ECODE_BUSY",
    "ECODE_SUSPEND",
    "ECODE_IO",
    "ECODE_REQ_FLUSHED",
    "ECODE_TIMEOUT",
    "ECODE_BAD_DATA",
    "ECODE_NOT_FOUND",
    "ECODE_UNSUPPORTED_DEV",
    "ECODE_NO_MEMORY",
    "ECODE_INVALID_ARG",
    "ECODE_BAD_ADDRESS",
    "ECODE_BAD_FORMAT",
    "ECODE_BAD_FRQ",
    "ECODE_DENIED",
    "ECODE_ALREADY_INITIALIZED",
    "ECODE_OVERFLOW",
    "ECODE_NOT_INITIALIZED",
    "ECODE_SAMPLERATE_UNAVAILABLE",
    "ECODE_RESOLUTION_UNAVAILABLE",
    "ECODE_BAUDRATE_UNAVAILABLE",
    "ECODE_PACKET_COLLISION",
    "ECODE_PROTOCOL",
    "ECODE_PIN_MUX_INVALID",
    "ECODE_READING_HIGH",
    "ECODE_READING_LOW",
    "ECODE_OUT_OF_BOUNDS",
    "ECODE_SIGNAL_LOST",
    "ECODE_CONFIRM_TIMEOUT",
    "ECODE_INCONSISTENT_DATA",
    "ECODE_UNEXPECTED_CASE",
    "ECODE_WATCHDOG_EARLY_WARNING",
    "ECODE_WATCHDOG_RESET",
    "ECODE_WATCHDOG_DID_KICK",
    "ECODE_EXCESSIVE_SUSPENSION",
    "ECODE_CRIT_ACTION_MUTEX_TIMEOUT",
    "ECODE_I2C_IRPOW_MUTEX_TIMEOUT",
    "ECODE_PROC_ADC_MUTEX_TIMEOUT",
    "ECODE_HW_STATE_MUTEX_TIMEOUT",
    "ECODE_USART_MUTEX_TIMEOUT",
    "ECODE_SPI_MUTEX_TIMEOUT",
    "ECODE_BAT_CHARGING_MUTEX_TIMEOUT",
    "ECODE_WATCHDOG_MUTEX_TIMEOUT",
    "ECODE_EQUISTACK_MUTEX_TIMEOUT",
    "ECODE_ALL_MUTEX_TIMEOUT",
    "ECODE_REWROTE_PROG_MEM",
    "ECODE_STACK_OVERFLOW",
    "ECODE_DET_ALREADY_HIGH",
    "ECODE_BAT_NOT_DISCHARGING",
    "ECODE_BAT_NOT_NOT_DISCHARGING",
    "ECODE_BAT_NOT_CHARGING",
    "ECODE_BAT_NOT_NOT_CHARGING",
    "ECODE_BAT_NOT_DISCHARGING_RESTART",
    "ECODE_BAT_FAULT",
    "ECODE_BAT_NOT_FULL_FOR_WHILE",
    "ECODE_BAT_LOW_VOLTAGE_FOR_WHILE",
    "ECODE_RECOMMISSION",
    "ECODE_ALL_SAME_VAL",
    "ECODE_CORRUPTED",
    "ECODE_CORRUPTED_FATAL",
    "ECODE_INVALID_STATE_CHANGE",
    "ECODE_TIMESTAMP_WRAPAROUND",
    "ECODE_INCONSISTENT_STATE",
    "ECODE_PWM_CUR_LOW_ON_DEPLOY",
    "ECODE_PWM_CUR_LOW_ON_MAX_CYCLE",
    "ECODE_PWM_CUR_VERY_LOW_ON_DEPLOY",
    "ECODE_PWM_CUR_VERY_LOW_ON_MAX_CYCLE",
    "ECODE_SOFTWARE_RESET",
    "ECODE_SAT_RESET",
    "ECODE_BAT_LI_TIMEOUT",
    "ECODE_BAT_LF_TIMEOUT",
    "ECODE_IR_POW_IN_USE_ON_STATE_CHANGE",
    "ECODE_UPLINK_REBOOT",
    "ECODE_UPLINK_KILL3DAYS",
    "ECODE_UPLINK_KILL1WEEK",
    "ECODE_UPLINK_KILLFOREVER",
    "ECODE_UPLINK_REVIVED",
    "ECODE_P1_NOT_DEPLOYED",
    "ECODE_P2_NOT_DEPLOYED",
    "ECODE_P3_NOT_DEPLOYED",
    "ECODE_IRPOW_SEM_TOO_MANY_USERS",
    "ECODE_IRPOW_SEM_TOO_FEW_USERS",
    "ECODE_I2C_BUS_ERROR",
    "ECODE_BAT_LF_CELLS_UNBALANCED",
    "ECODE_VALID_STATE_CHANGE"
]

// regular expression: (\w+)\t(.*) -> "$1": "$2",
var ecodeDescriptions = {
    "ECODE_OK": "No error (ATMEL software framework built in error code)",
    "ECODE_VALID_DATA": "Valid data (ATMEL software framework built in error code)",
    "ECODE_NO_CHANGE": "No change (ATMEL software framework built in error code)",
    "ECODE_ABORTED": "Operation aborted (ATMEL software framework built in error code)",
    "ECODE_BUSY": "Resource busy (ATMEL software framework built in error code)",
    "ECODE_SUSPEND": "Resource suspended (ATMEL software framework built in error code)",
    "ECODE_IO": "IO error (ATMEL software framework built in error code)",
    "ECODE_REQ_FLUSHED": "Request flushed (ATMEL software framework built in error code)",
    "ECODE_TIMEOUT": "Timeout during action (ATMEL software framework built in error code)",
    "ECODE_BAD_DATA": "Bad data (ATMEL software framework built in error code)",
    "ECODE_NOT_FOUND": "Data not found (ATMEL software framework built in error code)",
    "ECODE_UNSUPPORTED_DEV": "Unsupported device (ATMEL software framework built in error code)",
    "ECODE_NO_MEMORY": "Insufficient or nonexistent memory (ATMEL software framework built in error code)",
    "ECODE_INVALID_ARG": "Invalid argument to function call (ATMEL software framework built in error code)",
    "ECODE_BAD_ADDRESS": "Bad address in addressing protocal (ATMEL software framework built in error code)",
    "ECODE_BAD_FORMAT": "Bad format of command (ATMEL software framework built in error code)",
    "ECODE_BAD_FRQ": "Bad frequency (ATMEL software framework built in error code)",
    "ECODE_DENIED": "Request denied (ATMEL software framework built in error code)",
    "ECODE_ALREADY_INITIALIZED": "Data or device already initialized (ATMEL software framework built in error code)",
    "ECODE_OVERFLOW": "Buffer or data overflow (ATMEL software framework built in error code)",
    "ECODE_NOT_INITIALIZED": "Data or device not initialized (ATMEL software framework built in error code)",
    "ECODE_SAMPLERATE_UNAVAILABLE": "Invalid sample rate (ATMEL software framework built in error code)",
    "ECODE_RESOLUTION_UNAVAILABLE": "Invalid resolution (ATMEL software framework built in error code)",
    "ECODE_BAUDRATE_UNAVAILABLE": "Invalid baudrate (ATMEL software framework built in error code)",
    "ECODE_PACKET_COLLISION": "Packet collision (in packet-mode comms) (ATMEL software framework built in error code)",
    "ECODE_PROTOCOL": "Protocal error (ATMEL software framework built in error code)",
    "ECODE_PIN_MUX_INVALID": "Invalid setting for pin multiplexer (ATMEL software framework built in error code)",
    "ECODE_READING_HIGH": "Sensor reading higher than expected",
    "ECODE_READING_LOW": "Sensor reading lower than expected",
    "ECODE_OUT_OF_BOUNDS": "Constant value outside of reasonable bounds (address, field size, etc.)",
    "ECODE_SIGNAL_LOST": "Signal lost",
    "ECODE_CONFIRM_TIMEOUT": "Timeout reached while waiting form confirmation",
    "ECODE_INCONSISTENT_DATA": "Redundant data is inconsistent (data fields expected to be the same weren't)",
    "ECODE_UNEXPECTED_CASE": "Unexpected logical case or situation reached in code",
    "ECODE_WATCHDOG_EARLY_WARNING": "Watchdog early warning callback called (watchdog has not been reset recently)",
    "ECODE_WATCHDOG_RESET": "Satellite is about to be reset by watchdog task (satellite RTOS task has not been responding for long time period)",
    "ECODE_WATCHDOG_DID_KICK": "[status] Watchdog was responsible for satellite reboot (logged on startup)",
    "ECODE_EXCESSIVE_SUSPENSION": "Data collection RTOS task was suspended for unreasonable amount of time",
    "ECODE_CRIT_ACTION_MUTEX_TIMEOUT": "Critical action mutex (mutually excluding critical actions) was not aquired quickly enough",
    "ECODE_I2C_IRPOW_MUTEX_TIMEOUT": "I2C and IR power mutex (locking I2C line) was not aquired quickly enough",
    "ECODE_PROC_ADC_MUTEX_TIMEOUT": "Processor ADC mutex (locking singluar internal ADC) was not aquired quickly enough",
    "ECODE_HW_STATE_MUTEX_TIMEOUT": "Hardware state mutex (providing consistent state to holders) was not aquired quickly enough",
    "ECODE_USART_MUTEX_TIMEOUT": "USART mutex (locking USART line) was not aquired quickly enough",
    "ECODE_SPI_MUTEX_TIMEOUT": "SPI mutex (locking SPI (MRAM) line) was not aquired quickly enough",
    "ECODE_BAT_CHARGING_MUTEX_TIMEOUT": "Battery charging mutex (locking charging/discharging setting) was not aquired quickly enough",
    "ECODE_WATCHDOG_MUTEX_TIMEOUT": "Watchdog task mutex (protecting internal watchdog data structures) was not aquired quickly enough",
    "ECODE_EQUISTACK_MUTEX_TIMEOUT": "EQUiStack resource locking mutex (protecting stack contents) was not aquired quickly enough",
    "ECODE_ALL_MUTEX_TIMEOUT": "One or more mutexes could not be obtained when taking all in order to switch satellite state",
    "ECODE_REWROTE_PROG_MEM": "[status] Program memory was partially overwritten on reboot to correct errors",
    "ECODE_STACK_OVERFLOW": "RTOS stack overflow was detected, triggering satellite reboot",
    "ECODE_DET_ALREADY_HIGH": "Antenna was already deployed before trying",
    "ECODE_BAT_NOT_DISCHARGING": "A battery was not discharging when set to",
    "ECODE_BAT_NOT_NOT_DISCHARGING": "A battery was discharging when it was not set to",
    "ECODE_BAT_NOT_CHARGING": "A battery was not charging when set to",
    "ECODE_BAT_NOT_NOT_CHARGING": "A battery was charging when it was not set to",
    "ECODE_BAT_NOT_DISCHARGING_RESTART": "A battery was not discharging, because satellite rebooted when we tried to discharge off it",
    "ECODE_BAT_FAULT": "A battery charger's fault indicator turned on",
    "ECODE_BAT_NOT_FULL_FOR_WHILE": "A battery has not been full for a long time despite being charged",
    "ECODE_BAT_LOW_VOLTAGE_FOR_WHILE": "A battery has been at low voltage (and hasn't charged) for a long time",
    "ECODE_RECOMMISSION": "[status] A battery was recommissioned after being decomissioned",
    "ECODE_ALL_SAME_VAL": "Data read in from an external device was all a single value, suggesting an interface failure",
    "ECODE_CORRUPTED": "Data was corrupted",
    "ECODE_CORRUPTED_FATAL": "Data was corrupted fatally (beyond repair or correction)",
    "ECODE_INVALID_STATE_CHANGE": "Invalid satellite state change",
    "ECODE_TIMESTAMP_WRAPAROUND": "[status] Satellite timestamp reached maximum value and wrapped around to zero (unsigned integers)",
    "ECODE_INCONSISTENT_STATE": "Unexpected sensor, logical, or data state",
    "ECODE_PWM_CUR_LOW_ON_DEPLOY": "PWM current was slightly lower than expected once antenna deployed",
    "ECODE_PWM_CUR_LOW_ON_MAX_CYCLE": "",
    "ECODE_PWM_CUR_VERY_LOW_ON_DEPLOY": "PWM current was much lower than expected once antenna deployed",
    "ECODE_PWM_CUR_VERY_LOW_ON_MAX_CYCLE": "",
    "ECODE_SOFTWARE_RESET": "[status] Satellite was rebooted via software",
    "ECODE_SAT_RESET": "[status] Satellite was rebooted by external source besides watchdog",
    "ECODE_BAT_LI_TIMEOUT": "Voltage-measuring mutexes timed out while reading LiOn voltages",
    "ECODE_BAT_LF_TIMEOUT": "Voltage-measuring mutexes timed out while reading LiFePo voltages",
    "ECODE_IR_POW_IN_USE_ON_STATE_CHANGE": "IR power semaphore was held during state change, meaning a suspended task may keep IR power from ever being turned off",
    "ECODE_UPLINK_REBOOT": "[status] Radio reboot command received ",
    "ECODE_UPLINK_KILL3DAYS": "[status] Radio kill command (3 days) recieved",
    "ECODE_UPLINK_KILL1WEEK": "[status] Radio kill command (1 week) recieved",
    "ECODE_UPLINK_KILLFOREVER": "[status] Radio kill command (forever) recieved",
    "ECODE_UPLINK_REVIVED": "[status] Radio revive command recieved",
    "ECODE_P1_NOT_DEPLOYED": "Antenna did not deploy on PWM pin #1",
    "ECODE_P2_NOT_DEPLOYED": "Antenna did not deploy on PWM pin #2",
    "ECODE_P3_NOT_DEPLOYED": "Antenna did not deploy on PWM pin #3",
    "ECODE_IRPOW_SEM_TOO_MANY_USERS": "IR power semaphore has more more than 255 users (far more than possible)",
    "ECODE_IRPOW_SEM_TOO_FEW_USERS": "IR power semaphore couldn't be given, indicating someone tried to give the semaphore without having taken it already",
    "ECODE_I2C_BUS_ERROR": "A large number of I2C-related errors occured in a given time period, likely due to a large-scale I2C bus error",
    "ECODE_BAT_LF_CELLS_UNBALANCED": "The two LiFePo batteries in series in a LiFePo bank are not at the same voltage",
    "ECODE_VALID_STATE_CHANGE": "[status] Satellite successfully changed state",
}

// regular expression: (.*) -> "$1",
var elocNames = [
    "ELOC_NO_ERROR",
    "ELOC_IR_POS_Y",
    "ELOC_IR_NEG_X",
    "ELOC_IR_NEG_Y",
    "ELOC_IR_POS_X",
    "ELOC_IR_NEG_Z",
    "ELOC_IR_POS_Z",
    "ELOC_PD_POS_Y",
    "ELOC_PD_NEG_X",
    "ELOC_PD_NEG_Y",
    "ELOC_PD_POS_X",
    "ELOC_PD_NEG_Z",
    "ELOC_PD_POS_Z",
    "ELOC_TEMP_LF_1",
    "ELOC_TEMP_LF_2",
    "ELOC_TEMP_L_1",
    "ELOC_TEMP_L_2",
    "ELOC_TEMP_LED_1",
    "ELOC_TEMP_LED_2",
    "ELOC_TEMP_LED_3",
    "ELOC_TEMP_LED_4",
    "ELOC_RADIO_TEMP",
    "ELOC_IMU_ACC",
    "ELOC_IMU_GYRO",
    "ELOC_IMU_MAG",
    "ELOC_LED1SNS",
    "ELOC_LED2SNS",
    "ELOC_LED3SNS",
    "ELOC_LED4SNS",
    "ELOC_LFB1OSNS",
    "ELOC_LFB1SNS",
    "ELOC_LFB2OSNS",
    "ELOC_LFB2SNS",
    "ELOC_LF1REF",
    "ELOC_LF2REF",
    "ELOC_LF3REF",
    "ELOC_LF4REF",
    "ELOC_L1_REF",
    "ELOC_L2_REF",
    "ELOC_RADIO",
    "ELOC_AD7991_BBRD",
    "ELOC_AD7991_BBRD_L2_SNS",
    "ELOC_AD7991_BBRD_L1_SNS",
    "ELOC_AD7991_BBRD_L_REF",
    "ELOC_AD7991_BBRD_PANEL_REF",
    "ELOC_AD7991_CBRD",
    "ELOC_AD7991_CBRD_3V6_REF",
    "ELOC_AD7991_CBRD_3V6_SNS",
    "ELOC_AD7991_CBRD_5V_REF",
    "ELOC_AD7991_CBRD_3V3_REF",
    "ELOC_TCA",
    "ELOC_CACHED_PERSISTENT_STATE",
    "ELOC_MRAM1_READ",
    "ELOC_MRAM2_READ",
    "ELOC_MRAM_READ",
    "ELOC_MRAM1_WRITE",
    "ELOC_MRAM2_WRITE",
    "ELOC_MRAM_WRITE",
    "ELOC_5V_REF",
    "ELOC_STATE_HANDLING",
    "ELOC_BAT_CHARGING",
    "ELOC_ANTENNA_DEPLOY",
    "ELOC_WATCHDOG",
    "ELOC_IMU_TEMP",
    "ELOC_VERIFY_REGS",
    "ELOC_IDLE_DATA",
    "ELOC_ATTITUDE_DATA",
    "ELOC_FLASH",
    "ELOC_LOW_POWER_DATA",
    "ELOC_EQUISTACK_GET",
    "ELOC_EQUISTACK_PUT",
    "ELOC_BOOTLOADER",
    "ELOC_RTOS",
    "ELOC_BAT_L1",
    "ELOC_BAT_L2",
    "ELOC_BAT_LFB1",
    "ELOC_BAT_LFB2",
    "ELOC_BAT_CHARGING_SWITCH_1",
    "ELOC_BAT_CHARGING_SWITCH_2",
    "ELOC_BAT_CHARGING_SWITCH_3",
    "ELOC_BAT_CHARGING_SWITCH_4",
    "ELOC_BAT_CHARGING_SWITCH_5",
    "ELOC_BAT_CHARGING_SWITCH_6",
    "ELOC_BAT_CHARGING_SWITCH_7",
    "ELOC_BAT_CHARGING_SWITCH_8",
    "ELOC_BAT_CHARGING_SWITCH_9",
    "ELOC_IR_POW",
    "ELOC_RADIO_UPLINK",
    "ELOC_RADIO_TRANSMIT",
    "ELOC_RADIO_POWER",
    "ELOC_IMU_INIT",
    "ELOC_IMU_GYRO_INIT",
    "ELOC_IMU_ACCEL_INIT",
    "ELOC_IMU_MAG_INIT",
    "ELOC_SCALING_M",
    "ELOC_SCALING_B"
]

// regular expression: (\w+)\t(.*) -> "$1": "$2",
var elocDescriptions = {
    "ELOC_NO_ERROR": "No error (null value)",
    "ELOC_IR_POS_Y": "Infrared Sensor +Y",
    "ELOC_IR_NEG_X": "Infrared Sensor -X",
    "ELOC_IR_NEG_Y": "Infrared Sensor -Y",
    "ELOC_IR_POS_X": "Infrared Sensor +X",
    "ELOC_IR_NEG_Z": "Infrared Sensor -Z",
    "ELOC_IR_POS_Z": "Infrared Sensor +Z",
    "ELOC_PD_POS_Y": "Photo Diode Sensor +Y",
    "ELOC_PD_NEG_X": "Photo Diode Sensor -X",
    "ELOC_PD_NEG_Y": "Photo Diode Sensor -Y",
    "ELOC_PD_POS_X": "Photo Diode Sensor +X",
    "ELOC_PD_NEG_Z": "Photo Diode Sensor -Z",
    "ELOC_PD_POS_Z": "Photo Diode Sensor +Z",
    "ELOC_TEMP_LF_1": "LiFePo Bank #1 Temperature Sensor",
    "ELOC_TEMP_LF_2": "LiFePo Bank #2 Temperature Sensor",
    "ELOC_TEMP_L_1": "LiOn #1 Temperature Sensor",
    "ELOC_TEMP_L_2": "LiOn #2 Temperature Sensor",
    "ELOC_TEMP_LED_1": "LED #1 Temperature Sensor",
    "ELOC_TEMP_LED_2": "LED #2 Temperature Sensor",
    "ELOC_TEMP_LED_3": "LED #3 Temperature Sensor",
    "ELOC_TEMP_LED_4": "LED #4 Temperature Sensor",
    "ELOC_RADIO_TEMP": "Radio Temperature",
    "ELOC_IMU_ACC": "IMU Accelerometer",
    "ELOC_IMU_GYRO": "IMU Gyroscope",
    "ELOC_IMU_MAG": "IMU Magnetometer",
    "ELOC_LED1SNS": "LED #1 Current",
    "ELOC_LED2SNS": "LED #2 Current",
    "ELOC_LED3SNS": "LED #3 Current",
    "ELOC_LED4SNS": "LED #4 Current",
    "ELOC_LFB1OSNS": "LiFePo Bank #1 Output Current",
    "ELOC_LFB1SNS": "LiFePo Bank #1 Current",
    "ELOC_LFB2OSNS": "LiFePo Bank #2 Output Current",
    "ELOC_LFB2SNS": "LiFePo Bank #2 Current",
    "ELOC_LF1REF": "LiFePo #1 Voltage",
    "ELOC_LF2REF": "LiFePo #2 Voltage",
    "ELOC_LF3REF": "LiFePo #3 Voltage",
    "ELOC_LF4REF": "LiFePo #4 Voltage",
    "ELOC_L1_REF": "LiOn #1 Voltage",
    "ELOC_L2_REF": "LiOn #2 Voltage",
    "ELOC_RADIO": "Radio",
    "ELOC_AD7991_BBRD": "AD7991 Battery Board ADC",
    "ELOC_AD7991_BBRD_L2_SNS": "LiOn #2 Current",
    "ELOC_AD7991_BBRD_L1_SNS": "LiOn #1 Current",
    "ELOC_AD7991_BBRD_L_REF": "Active LiOn Voltage",
    "ELOC_AD7991_BBRD_PANEL_REF": "Solar Panel Voltage",
    "ELOC_AD7991_CBRD": "AD7991 Control Board ADC",
    "ELOC_AD7991_CBRD_3V6_REF": "3.6V Regulator Voltage",
    "ELOC_AD7991_CBRD_3V6_SNS": "3.6V Regulator Current",
    "ELOC_AD7991_CBRD_5V_REF": "5V Regulator Voltage",
    "ELOC_AD7991_CBRD_3V3_REF": "3.3V Regulator Voltage",
    "ELOC_TCA": "Battery Charging Signal Multiplexer",
    "ELOC_CACHED_PERSISTENT_STATE": "Cached Persistent State (from MRAM)",
    "ELOC_MRAM1_READ": "MRAM #1 Read",
    "ELOC_MRAM2_READ": "MRAM #2 Read",
    "ELOC_MRAM_READ": "MRAM Read",
    "ELOC_MRAM1_WRITE": "MRAM #1 Write",
    "ELOC_MRAM2_WRITE": "MRAM #2 Write",
    "ELOC_MRAM_WRITE": "MRAM Write",
    "ELOC_5V_REF": "5V Regulator Voltage State",
    "ELOC_STATE_HANDLING": "Satellite State Handling",
    "ELOC_BAT_CHARGING": "Battery Charging",
    "ELOC_ANTENNA_DEPLOY": "Antenna Deployment",
    "ELOC_WATCHDOG": "Satellite Watchdog",
    "ELOC_IMU_TEMP": "IMU Temperature",
    "ELOC_VERIFY_REGS": "Regulator Verification Check",
    "ELOC_IDLE_DATA": "Idle Data Read",
    "ELOC_ATTITUDE_DATA": "Attitude Data Read",
    "ELOC_FLASH": "Flash Data Read",
    "ELOC_LOW_POWER_DATA": "Low Power Data Read",
    "ELOC_EQUISTACK_GET": "EQUiStack Get",
    "ELOC_EQUISTACK_PUT": "EQUiStack Put",
    "ELOC_BOOTLOADER": "Bootloader",
    "ELOC_RTOS": "RTOS Operating System",
    "ELOC_BAT_L1": "LiOn Battery #1",
    "ELOC_BAT_L2": "LiOn Battery #2",
    "ELOC_BAT_LFB1": "LiFePo Battery Bank #1",
    "ELOC_BAT_LFB2": "LiFePo Battery Bank #2",
    "ELOC_BAT_CHARGING_SWITCH_1": "Battery Charging Switch #1",
    "ELOC_BAT_CHARGING_SWITCH_2": "Battery Charging Switch #2",
    "ELOC_BAT_CHARGING_SWITCH_3": "Battery Charging Switch #3",
    "ELOC_BAT_CHARGING_SWITCH_4": "Battery Charging Switch #4",
    "ELOC_BAT_CHARGING_SWITCH_5": "Battery Charging Switch #5",
    "ELOC_BAT_CHARGING_SWITCH_6": "Battery Charging Switch #6",
    "ELOC_BAT_CHARGING_SWITCH_7": "Battery Charging Switch #7",
    "ELOC_BAT_CHARGING_SWITCH_8": "Battery Charging Switch #8",
    "ELOC_BAT_CHARGING_SWITCH_9": "Battery Charging Switch #9",
    "ELOC_IR_POW": "IR Power",
    "ELOC_RADIO_UPLINK": "Radio Uplink Handling",
    "ELOC_RADIO_TRANSMIT": "Radio Transmission",
    "ELOC_RADIO_POWER": "Radio Power State",
    "ELOC_IMU_INIT": "IMU Initialization",
    "ELOC_IMU_GYRO_INIT": "Gyro Initialization",
    "ELOC_IMU_ACCEL_INIT": "Accelerometer Initialization",
    "ELOC_IMU_MAG_INIT": "Magnetometer Initialization",
    "ELOC_SCALING_M": "Data reading scaling (m-value)",
    "ELOC_SCALING_B": "Data reading scaling (b-value)",
}
