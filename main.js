let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    getElementById("ax").innerHTML = "Angular velocity around the X-axis " + sensor.x;
    getElementById("ay").innerHTML = "Angular velocity around the Y-axis " + sensor.y;
    getElementById("az").innerHTML = "Angular velocity around the Z-axis " + sensor.z;
};

sensor.onerror = event => alert(event.error.name, event.error.message);
