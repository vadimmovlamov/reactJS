import { useDispatch } from "react-redux";
import { signIn } from "../reducer";
import { useForm } from "../../../hooks";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const [signInForm, handleFormChange] = useForm({ email: "", password: "" });

  const handleSubmit = () => {
    dispatch(signIn(signInForm));
  };
  return (
    <div>
      <h1>Hello papanya</h1>
      <button onClick={handleSubmit}>Test</button>
      <input
        name="email"
        type="email"
        value={signInForm.email}
        onChange={handleFormChange}
      />
      <input
        name="password"
        type="password"
        value={signInForm.password}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default SignInContainer;
