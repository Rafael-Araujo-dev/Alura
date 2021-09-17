export default class NotesList {
    constructor() {
        this.notes = [];
        this._subscribers = [];
    }

    subscribe(func) {
      this._subscribers.push(func);
    }

    notify() {
        this._subscribers.forEach(func => {
            func(this.notes);
        });
    }


    addNotes(id, title, text, category) {
      const newNote = new Note(id, title, text, category);
      this.notes.push(newNote);
      this.notify();
    }

    removeNote(index) {
      this.notes.splice(index,1);
      this.notify();
    }
}

class Note {
  constructor(id, title, text, category) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.category = category;
  }
}