export interface BulletPoint {
    id: number;
    text: string;
    checked: boolean;
  }

  export interface SideProps {
    title: string;
    bulletPoints: Task[];
    onTaskChange: (id: number, isChecked: boolean) => void;
  }

  export interface BulletJournalProps {
    leftSide: SideProps;
    rightSide: SideProps;
  }

  export interface Task {
    id: number;
    text: string;
    checked: boolean;
    category: Category;
    priority: Priority;
    dueDate: Date;
  }

  export interface TaskProps {
    id: number;
    text: string;
    onTaskChange: (id: number, isChecked: boolean) => void; 
  }

export enum Category {
    Task = "Task",
    Event = "Event",
    Note = "Note",
  }
  
  export enum Priority {
    High = "High",
    Medium = "Medium",
    Low = "Low",
  }