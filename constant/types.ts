export interface Diary {
  _id: string;
  question_id: string;
  question_content: string;
  is_read: boolean;
  child_answer: string;
  child_answered_at: string;
  is_parent_answered: boolean;
  from_day: number;
  emotion: string;
}

export interface Message {
  _id: string;
  content: string;
  parent_answered_at: string;
}
