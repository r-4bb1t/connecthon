export interface Diary {
  _id: string;
  question_id: string;
  question_content: string;
  is_read: boolean;
  child_answer: string;
  from_days: number;
  is_parent_answered: boolean;
  parent_answered_at: string;
  emotion: string;
}

export interface Message {
  _id: string;
  content: string;
  parent_answered_at: string;
}
