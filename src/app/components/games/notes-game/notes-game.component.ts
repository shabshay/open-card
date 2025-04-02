import {Component} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from '../../shared/modal/modal.component';

@Component({
  standalone: true,
  selector: 'app-notes-game',
  templateUrl: './notes-game.component.html',
  styleUrls: ['./notes-game.component.scss'],
  imports: [NgIf, NgFor, FormsModule, ModalComponent]
})
export class NotesGameComponent {
  showInstructions = true;
  newNote = '';
  notes: string[] = [];
  usedNotes: string[] = [];
  currentNote = '';

  closeInstructions() {
    this.showInstructions = false;
  }

  addNote() {
    const trimmed = this.newNote.trim();
    if (trimmed) {
      this.notes.push(trimmed);
      this.newNote = '';
    }
  }

  drawNote() {
    const available = this.notes.filter(n => !this.usedNotes.includes(n));
    if (available.length === 0) {
      this.currentNote = 'נגמרו הפתקים! אפשר להתחיל מחדש ✨';
      return;
    }
    const note = available[Math.floor(Math.random() * available.length)];
    this.usedNotes.push(note);
    this.currentNote = note;
  }

  resetGame() {
    this.notes = [];
    this.usedNotes = [];
    this.currentNote = '';
    this.newNote = '';
  }
}
