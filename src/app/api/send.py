import serial
import RPi.GPIO as GPIO
import time

def send(dc, second):
    ser = serial.Serial('/dev/ttyACM0', 9600)
    # ser.flush()
    time.sleep(5)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(23, GPIO.OUT)
    
    ser.write(bytes(dc, 'utf-8'))
    text = ser.readline()
    ser.write(bytes(second, 'utf-8'))
    text2 = ser.readline()
    # ser.write(bytes(dc, 'utf-8'))
    # ser.write(bytes(second, 'utf-8'))
    GPIO.output(23,GPIO.HIGH)
    print(text)
    print(text2)
    print("up!")
    time.sleep(int(second)*1.1)
    GPIO.output(23,GPIO.LOW)
    # print(bytes(dc, 'utf-8'))
    # print(bytes(second, 'utf-8'))

    return "send"