import {Component} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ModalComponent} from '../../shared/modal/modal.component';
import {dares, pointsByLevel, truths, victoryMessages} from './truth-or-dare.model';

@Component({
  selector: 'app-truth-or-dare',
  templateUrl: './truth-or-dare.component.html',
  imports: [
    NgClass,
    NgIf,
    ModalComponent
  ],
  styleUrls: ['./truth-or-dare.component.scss']
})
export class TruthOrDareComponent {
  showInstructions = true;

  closeInstructions() {
    this.showInstructions = false;
  }

  usedTruths: string[] = [];
  usedDares: string[] = [];
  currentCard = '';
  currentLevel = '';
  score1 = 0;
  score2 = 0;
  winner: string | null = null;
  victoryMessage = '';



  drawCard(type: 'truth' | 'dare') {
    const pool = type === 'truth' ? truths : dares;
    const used = type === 'truth' ? this.usedTruths : this.usedDares;
    const available = pool.filter(card => !used.includes(card.text));

    if (available.length === 0) {
      this.currentCard = 'נגמרו הקלפים! אפשר להתחיל מהתחלה :)';
      this.currentLevel = '';
      return;
    }

    const card = available[Math.floor(Math.random() * available.length)];
    used.push(card.text);
    this.currentCard = `${card.text} (ניקוד: ${this.getPoints(card.level)})`;
    this.currentLevel = card.level;
  }

  getPoints(level: string): number {
    return level === 'easy' ? 1 : level === 'medium' ? 2 : 3;
  }

  addPoint(player: number, points: number) {
    if (player === 1) this.score1 += points;
    else this.score2 += points;

    if (this.score1 >= 10) {
      this.winner = 'אתה';
      this.victoryMessage = this.getRandomVictoryMessage('male');
    }
    if (this.score2 >= 10) {
      this.winner = 'את';
      this.victoryMessage = this.getRandomVictoryMessage('female');
    }
  }

  getRandomVictoryMessage(gender: 'male' | 'female'): string {
    const messages = victoryMessages[gender];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  resetGame() {
    this.usedTruths = [];
    this.usedDares = [];
    this.currentCard = '';
    this.currentLevel = '';
    this.score1 = 0;
    this.score2 = 0;
    this.winner = null;
  }

  getPointsForLevel(level: string): number {
    return pointsByLevel[level] ?? 1;
  }
}
