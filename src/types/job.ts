export interface Job {
  type: string;
  title: string;
  level: string;
  location: string;
  is_active: boolean;
}

export interface JobTransformed {
  type: string;
  title: string;
  location: string;
}

export interface JobsData {
  [key: string]: JobTransformed[];
}
