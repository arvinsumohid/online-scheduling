import { Booking } from "../interfaces/booking.interface";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const initialBookingState: Booking = {
  doctor: "",
  date: dayjs(),
  time: null,
  patient: {
    name: "",
    birthdate: null,
    phone: "",
    email: "",
    address: "",
    reason: "",
    is_first_visit: false,
    terms_and_conditions: false,
  },
};

export type BookingAction = {
  type: "SET_FIELD";
  field: string;
  value: string | Dayjs | boolean | null;
};

export const bookingReducer = (state: Booking, action: BookingAction) => {
  const { field, value } = action;
  const fields = field.split(".");
  if (field.startsWith("patient.")) {
    return {
      ...state,
      patient: {
        ...state.patient,
        [fields[1]]: value,
      },
    };
  }
  return { ...state, [field]: value };
};
