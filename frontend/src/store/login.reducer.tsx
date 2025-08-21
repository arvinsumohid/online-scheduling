export const initialLoginState = {
    email: "",
    password: "",
    rememberMe: false,
};

export type LoginAction = {
    type: string;
    field: string;
    value: string | boolean;
};

export const loginReducer = (state: typeof initialLoginState, action: LoginAction) => {
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

