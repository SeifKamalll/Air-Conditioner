
let acstatus = false;
let fanspeed = 0;
let temp = 16;

function status() {
  if (acstatus == false) {
    acstatus = true;
  } else {
    acstatus = false;
  }
  console.log("Status is : " + acstatus);
}


function speed() {
  if (fanspeed < 3 && acstatus == true) {
    fanspeed++;
  } else if (fanspeed == 3 && acstatus == true) {
    fanspeed = 1;
  }
  console.log("Fan Speed is : " + fanspeed);
}


function up() {
  if (temp < 29 && acstatus == true) {
    temp++;
  }
  console.log("Temperature is : " + temp);
}


function down() {
  if (temp > 16 && acstatus == true) {
    temp--;
  }
  console.log("Temperature is : " + temp);
}

