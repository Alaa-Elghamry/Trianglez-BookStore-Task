// src/hooks/useLoginFormik.js
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import validationSchema from "../components/forms/validationSchema";

const mockApiCall = (values) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ email: values.email });
    }, 1000);
  });

const useLoginFormik = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const user = await mockApiCall(values);
        dispatch(login(user));
        navigate("/");
      } catch (error) {
        console.error("Error during login process:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
};

export default useLoginFormik;
