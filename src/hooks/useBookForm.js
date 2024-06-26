import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validationSchema from "../components/AddBookForm/validationSchema";
import { addBook } from "../store/slices/booksSlice";

const useBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      category: "",
      price: "",
      pdf: null,
      coverPhoto: null,
      version: "",
      olderVersion: "",
      edition: "",
      isbn: "",
      releaseDate: null,
      brief: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Submitted", values);
      dispatch(
        addBook({
          id: Date.now(),
          title: values.title,
          author: values.author,
          category: values.category,
          isbn: values.isbn,
          version: values.version,
          coverPhoto: values.coverPhoto,
        }),
      );
      setSubmitting(false);
      navigate("/");
    },
  });

  return formik;
};

export default useBookForm;
