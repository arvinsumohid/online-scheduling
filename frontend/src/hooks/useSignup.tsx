import { useCallback, useReducer } from 'react'
import { initialSignupState, signupReducer } from '@/store/signup.reducer'

export default function useSignup() {
    const [signup, dispatch] = useReducer(signupReducer, initialSignupState);
    const handleChange = useCallback(
        (field: string,
        value: string,
      ) => {
        dispatch({ type: "SET_FIELD", field, value });
      }, []);

      const handleSubmit = () => {
        console.log('signup', signup)
      };
  return {
    signup,
    handleChange,
    handleSubmit,
  }
}
