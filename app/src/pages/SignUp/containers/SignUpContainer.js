import {useFetching, useForm} from "../../../hooks";
import {startCase} from "lodash";
import {useCallback, useEffect} from "react";
import {signUp} from "../api";
import {useNavigate} from "react-router-dom";
import {ROUTE_NAMES} from "../../../router/routeNames";

const SignUpContainer = () => {
    const [formValues, handleFormChange, handleReset] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        password: '',
        phone: '',
    });

    const {data, isLoading, error, handleDataLoad} = useFetching(signUp, null, false)

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        handleDataLoad(formValues);
        handleReset();
    }, [formValues]);

    const navigate = useNavigate();

    useEffect(() => {
        if (data?.data.success) {
            const timeout = setTimeout(() => {
                navigate(ROUTE_NAMES.SIGN_IN)
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [data])


    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                {Object.entries(formValues).map(([fieldName, value]) => {
                    return (
                        <input
                            key={fieldName}
                            type="text"
                            placeholder={startCase(fieldName)}
                            name={fieldName}
                            value={value}
                            onChange={handleFormChange}
                        />
                    )
                })}
                <button role="submit">
                    Create Account
                </button>

                <p style={{color: 'green'}}>
                    {data?.data?.message}
                </p>
                <p style={{color: 'red'}}>
                    {error?.message}
                </p>
            </form>
        </div>
    )
}

export default SignUpContainer;