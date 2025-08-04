import { Dayjs } from "dayjs";

export interface PatientInfo {
  name: string;
  birthdate: Dayjs | null;
  phone: string;
  email: string;
  address: string;
  reason: string;
  is_first_visit: boolean;
  terms_and_conditions: boolean;
}

export interface Booking {
  doctor: string;
  date: Dayjs | null;
  time: string | null;
  patient: PatientInfo;
}
