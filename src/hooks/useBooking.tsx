import { useCallback, useReducer } from "react";
import { initialBookingState, bookingReducer } from "@/store/booking.reducer";
import { Dayjs } from "dayjs";

export default function useBooking() {
  const [booking, dispatch] = useReducer(bookingReducer, initialBookingState);
  const handleBooking = useCallback(
    (field: string, value: string | Dayjs | boolean | null) => {
      dispatch({ type: "SET_FIELD", field, value });
    },
    [],
  );
  return {
    booking,
    handleBooking,
  };
}
