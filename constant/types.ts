export interface Diary {
  _id: string;
  question_id: string;
  question_content: string;
  is_child_read: boolean;
  child_answer: string;
  child_answered_at: string;
  is_parent_answered: boolean;
  parent_answer: string;
  parent_answered_at: string;
  from_day: number;
  emotion: string;
}
