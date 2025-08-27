export const initialSignupState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export type SignupAction = {
  type: string;
  field: string;
  value: string;
};

export const signupReducer = (
  state: typeof initialSignupState,
  action: SignupAction,
) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};
