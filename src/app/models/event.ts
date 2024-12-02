export class Event {
    id: string;
    title: string;
    description: string;
    category: string;
    public_event: boolean;
    city: string;
    school_id: string;
    start_date: number;
    end_date: number;
    speakers: [];
    
    constructor(id: string, title: string, description: string, category: string, public_event: boolean, city: string, school_id: string, start_date: number, end_date: number, speakers: []) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.public_event = public_event;
      this.city = city;
      this.school_id = school_id;
      this.start_date = start_date;
      this.end_date = end_date;
      this.speakers = speakers;
    }
  }