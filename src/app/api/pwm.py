import RPi.GPIO as GPIO
import time

def pwm(dc,second):
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(25, GPIO.OUT)
    p = GPIO.PWM(25, 1)
    p.start(dc)
    time.sleep(second)
    p.stop()
    # GPIO.cleanup()
    print(dc)
    return "pwm"