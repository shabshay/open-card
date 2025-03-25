import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-truth-or-dare',
  templateUrl: './truth-or-dare.component.html',
  imports: [
    NgClass,
    NgIf
  ],
  styleUrls: ['./truth-or-dare.component.scss']
})
export class TruthOrDareComponent {
  truths = [
    { text: "מה הרגע הכי מרגש איתי מאז שהפכנו להורים?", level: "easy" },
    { text: "מה הפנטזיה הזוגית שלך שלא מימשנו?", level: "medium" },
    { text: "מה אתה הכי אוהב לראות כשאני עם הילדים?", level: "easy" },
    { text: "איזה משפט שלי גורם לך לחייך גם ביום קשה?", level: "easy" },
    { text: "איזה חלק בגוף שלי הכי עושה לך את זה – גם בטרנינג?", level: "medium" },
    { text: "מה הרגע הכי סקסי שזכור לך מאז שהתחתנו?", level: "medium" },
    { text: "מה היית רוצה שאעשה לך בלילה בלי הפרעות?", level: "hard" },
    { text: "מה המקום הכי מפתיע שדמיינת אותנו עושים בו אהבה?", level: "hard" },
    { text: "מה את/ה מרגיש/ה כשאני מחבק/ת אותך חזק אחרי יום ארוך?", level: "easy" },
    { text: "איזו תנוחה את/ה הכי אוהב/ת – ולמה דווקא היא?", level: "hard" },
    { text: "אם הייתי משאיר/ה את הילדים אצל סבתא לילה אחד, מה היינו עושים?", level: "medium" },
    { text: "מה הדבר הכי שובב שעשינו והיית רוצה לחזור עליו?", level: "hard" },
    { text: "איזה חלק באישיות שלי הכי מדליק אותך?", level: "easy" },
    { text: "אם היינו בחופשה לבד – מה היית רוצה שנעשה שם?", level: "medium" },
    { text: "מה המבט הכי מגרה שלי בעיניך?", level: "medium" },
    { text: "מתי הרגשת על גג העולם איתי – סיפור אמיתי?", level: "easy" },
    { text: "מה הכי חסר לך מהתקופה לפני הילדים?", level: "medium" },
    { text: "אם הייתי קם באמצע הלילה ומתחיל ליזום – מה היית עושה?", level: "hard" },
    { text: "מה גורם לך להרגיש הכי נאהב/ת ממני?", level: "easy" },
    { text: "אם היית כותב עלינו סיפור ארוטי – איך הוא היה מתחיל?", level: "hard" }
  ];

  dares = [
    { text: "נשיקה של 15 שניות – בלי מילים.", level: "easy" },
    { text: "ללטף לי את הראש כמו כשאני גמור/ה מעייפות.", level: "easy" },
    { text: "לחבק אותי כמו שלא התחבקנו מאז הלידה.", level: "easy" },
    { text: "להגיד לי משהו מצחיק ואז משהו מרגש.", level: "medium" },
    { text: "להביע פנטזיה – ולתכנן איך נגשם אותה בשבוע הקרוב.", level: "medium" },
    { text: "לעשות סטריפ קטן – להוריד פריט לבוש לבחירה.", level: "hard" },
    { text: "לתאר לי איך היית מפנק/ת אותי אם הילדים היו אצל סבתא ללילה שלם.", level: "medium" },
    { text: "לעשות לי עיסוי בכתפיים או גב במשך דקה מלאה.", level: "easy" },
    { text: "ללחוש לי באוזן משהו מפתה שאף פעם לא אמרת לי.", level: "hard" },
    { text: "לשבת לי על הברכיים ולחבק – למשך דקה עם עיניים עצומות.", level: "medium" },
    { text: "לקחת אותי יד ביד לחדר ולהפתיע אותי במשהו רומנטי.", level: "medium" },
    { text: "לרקוד לי ריקוד איטי – גם בלי מוזיקה.", level: "easy" },
    { text: "להכין לי פתק אהבה ולקרוא אותו בקול.", level: "easy" },
    { text: "לשלוח לי הודעה סופר סקסית – בזמן שאני לידך.", level: "hard" },
    { text: "להכין לנו קינוח זוגי מפתה תוך 5 דקות.", level: "medium" },
    { text: "ללבוש משהו מפתה לשתי דקות לפחות.", level: "hard" },
    { text: "להסתכל עליי 30 שניות בלי מילים ולחייך.", level: "easy" },
    { text: "לספר לי משהו אינטימי שמעולם לא סיפרת לי.", level: "medium" },
    { text: "להוביל אותי בעיניים עצומות לסצנה שתרצה ליצור עכשיו.", level: "hard" },
    { text: "לשיר לי שיר אהבה באוזן – הכי ברגש שלך.", level: "medium" }
  ];

  usedTruths: string[] = [];
  usedDares: string[] = [];
  currentCard = '';
  currentLevel = '';
  score1 = 0;
  score2 = 0;

  drawCard(type: 'truth' | 'dare') {
    const pool = type === 'truth' ? this.truths : this.dares;
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

  addPoint(player: number) {
    if (player === 1) this.score1++;
    else this.score2++;
  }

  resetGame() {
    this.usedTruths = [];
    this.usedDares = [];
    this.currentCard = '';
    this.currentLevel = '';
    this.score1 = 0;
    this.score2 = 0;
  }
}
