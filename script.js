function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (data == ev.target.innerText) {
        ev.target.appendChild(document.getElementById(data));
    } else {
        alert('Wrong match!!!');
    }
}
