/**
 * An API library for interfacing with EQUiSat's data API.
 * See https://github.com/BrownSpaceEngineering/bse-api for
 * API details.
 */

ENABLE_DUMMY_DATA = true
API_ROUTE_PREFIX = "http://api.brownspace.org/equisat/"

/*********************************************************/
// Direct API calls
//
// For information on which signals are present in which data table,
// see this spreadsheet (look under the "Sources" column for the desired signal):
// https://docs.google.com/spreadsheets/d/1sHQNTC5f5sg6j5DD4OKjuQykpIM3z16uetWT9YuB9PQ/edit#gid=589366724
//
// PARAMETERS:
//      - signals : the desired list of raw signal names
//      - success : a callback to be called with the requested data as the only argument
//      - error : a callback to be called if an error occurs, with a string error message
//                as the only argument
//      - num : (ONLY for quantity funcs) the maximum number of rows of data to return
//      - startTime : (ONLY for time funcs) the javascript date to mark the start time of
//                     returned data (based on database creation time)
//      - endTime : (ONLY for time funcs) the javascript date to mark the end time of
//                     returned data (based on database creation time)
//
// RETURN TYPES (passed to the success() callback):
// All calls of this type return a list of javascript objects,
// where each row is an object containing:
//      - The value of all requested signals, under their signal names
//      - A "created" field designating when the data in that row was received
//      - A "transmission_cuid" field designating the database ID of the transmission
//          this data came from.
// Any signals that are NOT valid names (aren't in the database schema) will
// have values of "undefined"
/*********************************************************/

// These functions returns up to num rows containing the given signals,
// sorted in order of their creation date.
// If signals is empty or null, all signals will be returned.
function getCurrentInfoData(signals, num, success, error) {
    fetchRouteLatest("current-infos", signals, num, success, error);
}

function getPreambleData(signals, num, success, error) {
    //return fetchRouteLatest("/transmission", signals, num, success, error);
    // TODO
}

function getIdleData(signals, num, success, error) {
    fetchRouteLatest("data/idle", signals, num, success, error);
}

function getAttitudeData(signals, num, success, error) {
    fetchRouteLatest("data/attitude", signals, num, success, error);
}

function getFlashBurstData(signals, num, success, error) {
    fetchRouteLatest("data/flashBurst", signals, num, success, error);
}

function getFlashCompareData(signals, num, success, error) {
    fetchRouteLatest("data/flashComp", signals, num, success, error);
}

function getLowPowerData(signals, num, success, error) {
    fetchRouteLatest("data/lowPower", signals, num, success, error);
}

// Returns up to num rows of error codes (with all fields present),
// sorted by creation date
function getErrorCodes(num, success, error) {
    fetchRouteLatest("error-codes", [], num, success, error); // all "signals"
}

/*********************************************************/
// NOT IMPLEMENTED YET
// "Universal" API routes that combine all datasets containing
// a particular signal to provide all data points in a single call.
//
// RETURN TYPES (passed to the success() callback):
// All calls of this type return (at the top level) an object,
// which has the following fields:
//      - The desired signals as keys to a simple list of all
//        that signal's values over time. All of these lists
//        will be the same length across signal values.
//
//      - A "timestamps" field containing a list of timestamps
//        (date objects) corresponding to the values of all the
//        sensors. Note this will also be the same length as
//        all signal lists. If one or more sensor is stored
//        more frequently than another, the less frequent sensors
//        will simply duplicate their most recent value for all
//        extra timestamps necessary to correspond with the
//        more frequent sensor. An example:
//          timestamps:  [0,  1,  2,  3,  4,  5,  6,  7,  8]
//          slow signal: [3,  3,  3,  3,  5,  5,  5,  5,  5]
//          fast signal: [12, 14, 15, 14, 13, 16, 19, 20, 12]
//
//      - ...
/*********************************************************/
function getHistoricData(signals, num, success, error) {

}


function getHistoricDataInPeriod(signals, startTime, endTime, success, error) {

}

/*********************************************************/
// API helpers
/*********************************************************/
function fetchRouteLatest(routeSuffix, signals, num, success, error) {
    if (ENABLE_DUMMY_DATA) {
        success(getDummyData(signals, num));
    } else {
        signalStr = signals.join(",")
        query = { "limit": num, "fields": signalStr };
        jqxhr = $.getJSON(API_ROUTE_PREFIX + routeSuffix + "/latest", query, success);
        jqxhr.fail(error);
    }
}

function fetchRouteTimePeriod(routeSuffix, signals, startTime, endTime, success, error) {
    if (ENABLE_DUMMY_DATA) {
        success(getDummyData(signals, 10));
    } else {
        signalStr = signals.join(",")
        query = { "start_date": startTime, "end_date": endDate, "fields": signalStr };
        jqxhr = $.getJSON(API_ROUTE_PREFIX + routeSuffix, query, success);
        jqxhr.fail(error);
    }
}

function getDummyData(signals, num) {
    data = []
    for (var n = 0; n < num; n++) {
        data[n] = {}
        for (var i = 0; i < signals.length; i++) {
            data[n][signals[i]] = Math.random()*100;
        }
    }
    return data;
}
