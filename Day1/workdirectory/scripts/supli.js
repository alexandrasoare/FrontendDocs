/**
 * Created by Alexandra.Soare on 6/27/2017.
 */

function computeBMI() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    sal =703 * parseInt(w) / (parseInt(h)*parseInt(h));
    var command = '<p>BMI: ' + sal.toFixed(2) + '</p>';
    var container = document.getElementById('rez1');
    container.innerHTML = command;
}