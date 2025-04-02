import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalComponent} from '../../shared/modal/modal.component';
import {questions} from './deep-questions.model';

@Component({
  standalone: true,
  selector: 'app-deep-questions',
  templateUrl: './deep-questions.component.html',
  imports: [
    NgIf,
    ModalComponent
  ],
  styleUrls: ['./deep-questions.component.scss']
})
export class DeepQuestionsComponent {
  showInstructions = true;

  usedQuestions: string[] = [];
  currentQuestion: string = '';

  closeInstructions() {
    this.showInstructions = false;
  }

  drawQuestion() {
    const available = questions.filter(q => !this.usedQuestions.includes(q));

    if (available.length === 0) {
      this.currentQuestion = 'נגמרו השאלות! אפשר להתחיל מחדש ❤️';
      return;
    }

    const question = available[Math.floor(Math.random() * available.length)];
    this.usedQuestions.push(question);
    this.currentQuestion = question;
  }

  resetGame() {
    this.usedQuestions = [];
    this.currentQuestion = '';
  }
}
