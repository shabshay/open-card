import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalComponent} from '../../shared/modal/modal.component';

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

  questions: string[] = [
    'מה גורם לך להרגיש הכי אהוב/ה?',
    'מתי בפעם האחרונה הרגשת שאני באמת מבין/ה אותך?',
    'אם היית צריך לבחור זיכרון אחד לנצור לנצח, מה הוא היה?',
    'מה היית רוצה שנשפר בזוגיות שלנו?',
    'מה החלום הכי גדול שלך לעתיד שלנו?',
    'ממה אתה הכי מפחד בזוגיות?',
    'מה למדת ממני שלא ציפית?',
    'איזו מחווה קטנה גורמת לך להתרגש ממני?'
  ];

  usedQuestions: string[] = [];
  currentQuestion: string = '';

  closeInstructions() {
    this.showInstructions = false;
  }

  drawQuestion() {
    const available = this.questions.filter(q => !this.usedQuestions.includes(q));

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
