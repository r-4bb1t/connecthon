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

export type ActivityTypes =
  | "공원탐방"
  | "교육체험"
  | "전시/관람"
  | "문화행사"
  | "농장"
  | "키즈카페";

export interface CardType {
  image: string;
  title: string;
  description: string;
  url: string;
  location: string;
  target: string;
  activityType: ActivityTypes;
  type?: "list" | "wishlist" | "history";
}
