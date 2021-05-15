#include <TinyStepper_28BYJ_48.h>

const int STEPS_PER_REVOLUTION = 2048;
TinyStepper_28BYJ_48 stepper;

unsigned long timeStamp, recentTime;

int runSpeed = 0, runTime = 0;

void setup() {
  Serial.begin(9600);
  stepper.connectToPins(8, 9, 10, 11);
  stepper.setAccelerationInStepsPerSecondPerSecond(512);

  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {

  timeStamp = millis();

  recvInfo(); // get speed
  delay(20);
  recvInfo(); // get time
  //showNewData();

  if (runSpeed != 0 && runTime != 0) {
    recentTime = millis();
    while (recentTime - timeStamp < runTime) {
      stepper.moveRelativeInSteps(2048); // half round
      recentTime = millis();
    }
  }

  runSpeed = 0;
  runTime = 0;

  delay(2000);
}

void recvInfo() {
  String rc;

  while (Serial.available() > 0) {
    rc = Serial.readString();

    if (runSpeed == 0) {
      runSpeed = rc.toInt();
      stepper.setSpeedInStepsPerSecond(runSpeed * 10);
      Serial.println(runSpeed);
    }
    else {
      runTime = rc.toInt() * 1000;
      Serial.println(runTime);
    }
  }
}

/*
void recvInfo() {
  static byte ndx = 0;
  char endMarker = '\n';
  String rc;

  for (int i = 0; i < 2; ++i) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1000);
  }

  while (Serial.available() > 0) {
    rc = Serial.readString();
    runSpeed = rc.toInt();
    //stepper.setSpeedInStepsPerSecond(runSpeed * 10);

    //rc = Serial.read() - '0';
    //runTime = rc * 1000;

    Serial.println(runSpeed);
  }
}
*/
