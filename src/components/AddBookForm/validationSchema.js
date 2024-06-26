import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Book title is required"),
  author: Yup.string().required("Book author is required"),
  category: Yup.string().required("Book category is required"),
  price: Yup.number()
    .required("Book price is required")
    .positive("Price must be positive"),
  pdf: Yup.mixed().required("Book PDF is required"),
  coverPhoto: Yup.mixed().required("Book cover photo is required"),
  version: Yup.string().required("Book version is required"),
  isbn: Yup.string()
    .required("Book ISBN is required")
    .length(13, "ISBN must be exactly 13 characters"),
  brief: Yup.string()
    .required("Book brief is required")
    .max(800, "Book brief cannot exceed 800 characters"),
});

export default validationSchema;
