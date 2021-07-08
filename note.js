class Note {
    constructor(noteId, osc1, osc2, osc3, osc4, osc5, osc6, osc7, gain1, gain2, gain3, gain4, gain5, gain6, gain7) {
      this.noteId = noteId;
      this.osc1 = osc1;
      this.osc2 = osc2;
      this.osc3 = osc3;
      this.osc4 = osc4;
      this.osc5 = osc5;
      this.osc6 = osc6;
      this.osc7 = osc7;
      this.gain1 = gain1;
      this.gain2 = gain2;
      this.gain3 = gain3;
      this.gain4 = gain4;
      this.gain5 = gain5;
      this.gain6 = gain6;
      this.gain7 = gain7;
    }
  }
  
  module.exports = Note;