#include <TinyStepper_28BYJ_48.h>

const int STEPS_PER_REVOLUTION = 2048;
TinyStepper_28BYJ_48 stepper;

unsigned long timeStamp, recentTime;

const byte numChars = 32;
char receivedChars[numChars];

int runSpeed = 0, runTime = 0;
boolean newData = false;

void setup() {
  Serial.begin(9600);
  stepper.connectToPins(8, 9, 10, 11);
  stepper.setAccelerationInStepsPerSecondPerSecond(512);
}

void loop() {

  timeStamp = millis();

  recvInfo(); // get speed
  recvInfo(); // get time
  showNewData();

  if (runSpeed != 0 && runTime != 0) {
    recentTime = millis();
    while (recentTime < timeStamp + runTime) {
      stepper.moveRelativeInSteps(2048); // half round
    }
  }

  runSpeed = 0;
  runTime = 0;

  delay(2000);

}

void recvInfo() {
  static byte ndx = 0;
  char endMarker = '\n';
  char rc;

  while (Serial.available() > 0 && newData == false) {
    rc = Serial.read();

    if (rc != endMarker) {
      receivedChars[ndx] = rc;
      ndx++;
      if (ndx >= numChars) {
        ndx = numChars - 1;
      }
    }
    else {
      receivedChars[ndx] = '\0'; // terminate the string
      ndx = 0;
      newData = true;
    }
  }

  if (runSpeed == 0) {
    runSpeed = atoi(receivedChars);
    stepper.setSpeedInStepsPerSecond(runSpeed * 10);
  }
  else {
    runTime = atoi(receivedChars);
  }
}

void showNewData() {
  if (newData == true) {
    Serial.println("The runSpeed is:");
    Serial.println(runSpeed);
    Serial.println("The runTime is:");
    Serial.println(runTime);
    newData = false;
  }
}
