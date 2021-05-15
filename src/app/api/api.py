from flask import Flask, Response
from flask_cors import CORS
import time
from fire import fire
from picamera.array import PiRGBArray
from picamera import PiCamera
from camera import Camera
from pwm import pwm
from send import send
from stop import stop

# camera = PiCamera()
# rawCapture = PiRGBArray(camera, size=(640, 480))

app = Flask(__name__)
CORS(app)

@app.route("/fire/<second>")
def run(second):
    print(second)
    second = int(second)
    return fire(second)

@app.route("/pwm/<dc>/<second>")
def rotate(dc,second):
    print(dc, second)
    dc = str(int(dc)*0.4)
    # second = int(second)
    return send(dc,second)

@app.route("/stop")
def halt():
    return stop()

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/stream')
def stream():
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')