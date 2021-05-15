import serial
import RPi.GPIO as GPIO
import time

def stop():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(23, GPIO.OUT)
    GPIO.output(23,GPIO.LOW)
    ser = serial.Serial('/dev/ttyACM0', 9600)
    time.sleep(5)
    
    ser.write(bytes('0', 'utf-8'))
    text = ser.readline()
    ser.write(bytes('0', 'utf-8'))
    text2 = ser.readline()
    

    return "stop"