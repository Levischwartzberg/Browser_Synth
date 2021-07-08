var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startOscillators);

function startOscillators() {
    storeNote1.osc1.start();
    storeNote1.osc2.start();
    storeNote1.osc3.start();
    storeNote1.osc4.start();
    storeNote1.osc5.start();
    storeNote1.osc6.start();
    storeNote1.osc7.start();
    storeNote2.osc1.start();
    storeNote2.osc2.start();
    storeNote2.osc3.start();
    storeNote2.osc4.start();
    storeNote2.osc5.start();
    storeNote2.osc6.start();
    storeNote2.osc7.start();
    storeNote3.osc1.start();
    storeNote3.osc2.start();
    storeNote3.osc3.start();
    storeNote3.osc4.start();
    storeNote3.osc5.start();
    storeNote3.osc6.start();
    storeNote3.osc7.start();
    storeNote4.osc1.start();
    storeNote4.osc2.start();
    storeNote4.osc3.start();
    storeNote4.osc4.start();
    storeNote4.osc5.start();
    storeNote4.osc6.start();
    storeNote4.osc7.start();
}

var count = 0;

var ac = new AudioContext();

const storeNote1 = {
    noteNumber: 0,
    osc1: ac.createOscillator(),
    gain1: ac.createGain(),
    osc2: ac.createOscillator(),
    gain2: ac.createGain(),
    osc3: ac.createOscillator(),
    gain3: ac.createGain(),
    osc4: ac.createOscillator(),
    gain4: ac.createGain(),
    osc5: ac.createOscillator(),
    gain5: ac.createGain(),
    osc6: ac.createOscillator(),
    gain6: ac.createGain(),
    osc7: ac.createOscillator(),
    gain7: ac.createGain()
}

const storeNote2 = {
    noteNumber: 0,
    osc1: ac.createOscillator(),
    gain1: ac.createGain(),
    osc2: ac.createOscillator(),
    gain2: ac.createGain(),
    osc3: ac.createOscillator(),
    gain3: ac.createGain(),
    osc4: ac.createOscillator(),
    gain4: ac.createGain(),
    osc5: ac.createOscillator(),
    gain5: ac.createGain(),
    osc6: ac.createOscillator(),
    gain6: ac.createGain(),
    osc7: ac.createOscillator(),
    gain7: ac.createGain()
}

const storeNote3 = {
    noteNumber: 0,
    osc1: ac.createOscillator(),
    gain1: ac.createGain(),
    osc2: ac.createOscillator(),
    gain2: ac.createGain(),
    osc3: ac.createOscillator(),
    gain3: ac.createGain(),
    osc4: ac.createOscillator(),
    gain4: ac.createGain(),
    osc5: ac.createOscillator(),
    gain5: ac.createGain(),
    osc6: ac.createOscillator(),
    gain6: ac.createGain(),
    osc7: ac.createOscillator(),
    gain7: ac.createGain()
}

const storeNote4 = {
    noteNumber: 0,
    osc1: ac.createOscillator(),
    gain1: ac.createGain(),
    osc2: ac.createOscillator(),
    gain2: ac.createGain(),
    osc3: ac.createOscillator(),
    gain3: ac.createGain(),
    osc4: ac.createOscillator(),
    gain4: ac.createGain(),
    osc5: ac.createOscillator(),
    gain5: ac.createGain(),
    osc6: ac.createOscillator(),
    gain6: ac.createGain(),
    osc7: ac.createOscillator(),
    gain7: ac.createGain()
}

const noteStore = [];

function playSound(freq,noteNum) {
    count++;
    if (count % 4 === 1) {
        noteStore.unshift(storeNote1);
    }
    else if (count % 4 === 2) {
        noteStore.unshift(storeNote2);
    }
    else if (count % 4 === 3) {
        noteStore.unshift(storeNote3);
    }
    else if (count % 4 === 0) {
        noteStore.unshift(storeNote4);
    }
    if (noteStore.length > 20) {
        noteStore.splice(-1,1);
    }
    noteStore[0].noteNumber = noteNum;

    noteStore[0].osc1.type = document.getElementById("wave1").value;
    noteStore[0].osc1.frequency.setValueAtTime(freq, ac.currentTime);
    noteStore[0].gain1.gain.linearRampToValueAtTime(document.getElementById("gain1").value, ac.currentTime + .1);
    noteStore[0].osc2.type = document.getElementById("wave2").value;
    noteStore[0].osc2.frequency.setValueAtTime(freq*2, ac.currentTime);
    noteStore[0].gain2.gain.linearRampToValueAtTime(document.getElementById("gain2").value, ac.currentTime + .1);
    noteStore[0].osc3.type = document.getElementById("wave3").value;
    noteStore[0].osc3.frequency.setValueAtTime(freq*3, ac.currentTime);
    noteStore[0].gain3.gain.linearRampToValueAtTime(document.getElementById("gain3").value, ac.currentTime + .1);
    noteStore[0].osc4.type = document.getElementById("wave4").value;
    noteStore[0].osc4.frequency.setValueAtTime(freq*4, ac.currentTime);
    noteStore[0].gain4.gain.linearRampToValueAtTime(document.getElementById("gain4").value, ac.currentTime + .1);
    noteStore[0].osc5.type = document.getElementById("wave5").value;
    noteStore[0].osc5.frequency.setValueAtTime(freq*5, ac.currentTime);
    noteStore[0].gain5.gain.linearRampToValueAtTime(document.getElementById("gain5").value, ac.currentTime + .1);
    noteStore[0].osc6.type = document.getElementById("wave6").value;
    noteStore[0].osc6.frequency.setValueAtTime(freq*6, ac.currentTime);
    noteStore[0].gain6.gain.linearRampToValueAtTime(document.getElementById("gain6").value, ac.currentTime + .1);
    noteStore[0].osc7.type = document.getElementById("wave7").value;
    noteStore[0].osc7.frequency.setValueAtTime(freq*7, ac.currentTime);
    noteStore[0].gain7.gain.linearRampToValueAtTime(document.getElementById("gain7").value, ac.currentTime + .1);

    noteStore[0].osc1.connect(noteStore[0].gain1);
    noteStore[0].gain1.connect(ac.destination);
    noteStore[0].osc2.connect(noteStore[0].gain2);
    noteStore[0].gain2.connect(ac.destination);
    noteStore[0].osc3.connect(noteStore[0].gain3);
    noteStore[0].gain3.connect(ac.destination);
    noteStore[0].osc4.connect(noteStore[0].gain4);
    noteStore[0].gain4.connect(ac.destination);
    noteStore[0].osc5.connect(noteStore[0].gain5);
    noteStore[0].gain5.connect(ac.destination);
    noteStore[0].osc6.connect(noteStore[0].gain6);
    noteStore[0].gain6.connect(ac.destination);
    noteStore[0].osc7.connect(noteStore[0].gain7);
    noteStore[0].gain7.connect(ac.destination);

    console.log(noteStore);
    console.log(noteStore[0]);
}

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

function onMIDISuccess(midiAccess) {
    midi = midiAccess;
    var inputs = midi.inputs.values();
    // loop through all inputs
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        // listen for midi messages
        input.value.onmidimessage = onMIDIMessage;
        // this just lists our inputs in the console
        listInputs(input);
    }
    // listen for connect/disconnect message
    midi.onstatechange = onStateChange;
}

function onMIDIMessage(event) {
    data = event.data,
    cmd = data[0] >> 4,
    channel = data[0] & 0xf,
    type = data[0] & 0xf0, // channel agnostic message type. Thanks, Phil Burk.
    note = data[1],
    velocity = data[2];
    // with pressure and tilt off
    // note off: 128, cmd: 8 
    // note on: 144, cmd: 9
    // pressure / tilt on
    // pressure: 176, cmd 11: 
    // bend: 224, cmd: 14

    switch (type) {
        case 144: // noteOn message 
             if (velocity > 0) {
                noteOn(note, velocity);
            } else {
                noteOff(note);
            }
             break;
        case 128: // noteOff message 
            noteOff(note, velocity);
            break;
    }

    // console.log('data', data, 'cmd', cmd, 'channel', channel);
}

function onStateChange(event) {
    var port = event.port,
        state = port.state,
        name = port.name,
        type = port.type;
    if (type == "input") console.log("name", name, "port", port, "state", state);
}

function listInputs(inputs) {
    var input = inputs.value;
    console.log("Input port : [ type:'" + input.type + "' id: '" + input.id +
        "' manufacturer: '" + input.manufacturer + "' name: '" + input.name +
        "' version: '" + input.version + "']");
}

function noteOn(midiNote, velocity) {
    player(midiNote, velocity);
}

function noteOff(midiNote, velocity) {
    console.log("off");
    console.log(midiNote);
    for (i=0; i<noteStore.length; i++) {
        if (noteStore[i].noteNumber === midiNote) {
            dampenNotes(i);
        }
    }
}

function dampenNotes(index) {
   noteStore[i].gain1.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain2.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain3.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain4.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain5.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain6.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
   noteStore[i].gain7.gain.linearRampToValueAtTime(0, ac.currentTime + .1);
}

function player(note, velocity) {
    // console.log(note);
    // console.log(velocity);
    playSound(convertFreq(note),note);
}

function onMIDIFailure(e) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function convertFreq(note) {
    return (440 / 32) * (2 ** ((note - 9) / 12));
}
