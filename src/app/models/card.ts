export class Card {
  _id: number;
  subject: string;
  description: string;
  author_id: string;
  createdAt: Date;
  messages: Comment;

constructor(_id: number, subject: string, description: string, author_id: string, createdAt: Date, messages: Comment) {
  this._id = _id;
  this.subject = subject;
  this.description = description;
  this.author_id = author_id;
  this.createdAt = createdAt;
  this.messages = messages;
}

}
