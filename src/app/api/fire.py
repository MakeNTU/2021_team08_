import RPi.GPIO as GPIO
import time

def fire(second):
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(23, GPIO.OUT)
    GPIO.output(23,GPIO.HIGH)
    print("up!")
    time.sleep(second)
    GPIO.output(23,GPIO.LOW)
    return "fire"

if __name__ == "__main__":
    fire()