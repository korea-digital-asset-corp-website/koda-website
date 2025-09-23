interface FaqItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    questionKey: 'items.0.question',
    answerKey: 'items.0.answer',
  },
  {
    id: 2,
    questionKey: 'items.1.question',
    answerKey: 'items.1.answer',
  },
  {
    id: 3,
    questionKey: 'items.2.question',
    answerKey: 'items.2.answer',
  },
  {
    id: 4,
    questionKey: 'items.3.question',
    answerKey: 'items.3.answer',
  },
  {
    id: 5,
    questionKey: 'items.4.question',
    answerKey: 'items.4.answer',
  },
];
