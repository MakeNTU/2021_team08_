import RPi.GPIO as GPIO
import time

def blink():
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(26,GPIO.OUT)
    GPIO.output(26,GPIO.HIGH)
    print("High")
    time.sleep(10)
    GPIO.output(26,GPIO.LOW)
    print("Low")
    return "finish!"
    # while True:
    #     GPIO.output(26,GPIO.HIGH)
        # time.sleep(1)
        # GPIO.output(26,GPIO.LOW)
        # time.sleep(1)