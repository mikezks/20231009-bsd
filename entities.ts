export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;
  delayed: boolean;
}

export interface Passenger {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: string; // ISO Formatted Date String
}

export interface Ticket {
  id: number;
  flightId: number;
  passengerId: number;
  boardingTime: string; // ISO Formatted Date String
  terminal: string;
  gate: string;
}


