/* BUS LAB */
/* 3 Busses (A, B, C) with multiple stops each (At least 5) */
/* One shared stop (Grand Central) */

/* 4 input Variables (user choice)

board_bus
board_stop
get_off_bus
get_off_stop

*/

/* Output: Number of stops to go from one point to another through Grand Central */

var aStops = ["A1", "Grand Central", "A3", "A4", "A5"];
var bStops = ["B1", "B2", "Grand Central", "B4", "B5", "B6"];
var cStops = ["C1", "C2", "Grand Central", "C4", "C5"];

var board_bus = "C";
var board_stop = 2;
var get_off_bus = "B";
var get_off_stop = 6;
var total_stops;

function stops_to_GCS(bus, bstop) {
  var stop_idx, gcs_idx;
  switch(bus)
  {
  case "A":
    stop_idx = aStops.indexOf(bus+bstop);
    gcs_idx = aStops.indexOf("Grand Central");
    break;
  case "B":
    stop_idx = bStops.indexOf(bus+bstop);
    gcs_idx = bStops.indexOf("Grand Central");
    break;
  case "C":
    stop_idx = cStops.indexOf(bus+bstop);
    gcs_idx = cStops.indexOf("Grand Central");
    break;
  default:
    return 0;
  }
  
  // console.log("stop_idx: " + stop_idx + ", gcs_idx: " + gcs_idx);
  
  if (stop_idx < 0) {
    return 0; // Default stop is GCS (zero distance from itself)
  } else {
    return Math.abs(stop_idx - gcs_idx);
  }
}

console.log("Start Stop: \t End Stop: \t Total_stops: ");

total_stops = stops_to_GCS(board_bus, board_stop) + stops_to_GCS(get_off_bus, get_off_stop);

console.log(board_bus + board_stop + "\t\t\t" + get_off_bus + get_off_stop + "\t\t" + total_stops);


