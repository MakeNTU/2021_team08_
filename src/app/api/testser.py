import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600)
ser.flush()
time.sleep(5)
ser.write(b'20')

text = ser.readline()

ser.write(b'100')


text2 = ser.readline()

print(text)
print(text2)
ser.close()