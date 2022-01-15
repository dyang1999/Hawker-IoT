from flask import Flask, render_template, request, jsonify
import pyfirmata
import time

app = Flask(__name__)
# app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["DEBUG"] = True

# global var
led_status = 0
vals = []


def set_up(port, analog_input, output):
    board = pyfirmata.Arduino(port)

    it = pyfirmata.util.Iterator(board)
    it.start()
    reading = board.get_pin(analog_input)
    led = board.get_pin(output)

    return reading, led, board


def read_input(reading):
    global vals
    vals = []
    # while True:
    # print(reading.read())
    # time.sleep(1)
    for i in range(6):
        val = reading.read()
        if not isinstance(val, type(None)):
            vals.append(val)
        time.sleep(0.5)
    return vals


def run_arduino():
    try:
        reading, led, board = set_up(
            '/dev/tty.usbserial-14210', 'a:0:i', 'd:8:o')
    except:
        raise Exception('failed to set up arduino')
    vals = read_input(reading)
    led.write(occupancy(vals))
    print(vals)
    return vals, board


def occupancy(vals):
    if vals[-1] < 0.25 and vals[-2] < 0.25:
        return 1
    else:
        return 0


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        pass
    else:

        # vals, board = run_arduino()
        # board.exit()
        vals = [0, 0, 0, 0, 0]
        return render_template(
            'home.html',
            led_status=occupancy(vals),
        )
        # return (occupancy(vals))


if __name__ == '__main__':
    app.run(debug=True)
