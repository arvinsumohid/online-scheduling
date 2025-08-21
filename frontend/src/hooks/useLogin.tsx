import { useCallback, useReducer } from 'react'
import { initialLoginState, loginReducer } from '@/store/login.reducer'

export default function useLogin() {
    const [login, dispatch] = useReducer(loginReducer, initialLoginState);
    const handleChange = useCallback(
        (field: string,
        value: string | boolean,
      ) => {
        dispatch({ type: "SET_FIELD", field, value });
      }, []);

      const handleSubmit = () => {
        console.log('login', login)
      };

  return {
    login,
    handleChange,
    handleSubmit,
  }
}
