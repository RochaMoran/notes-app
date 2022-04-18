import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { authSchema } from "../../helpers/createNote";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import useUser from "./useUser";

export default function useAuth(authType: string) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });
  const {login} = useUser()

  const onSubmit = (data: any) => {
    const auth = getAuth();

    if (authType === "login") {
    signIn(auth, data);
    } else {
      createUser(auth, data);
    }
  };

  const signIn = (auth: any, data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        login(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const createUser = (auth: any, data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
}
