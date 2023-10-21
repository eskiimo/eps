import React, { useState } from "react";
// import axios from 'axios'
import { useFormik } from "formik";
import * as Yup from "yup";

import "./myform.css";
import ErrorText from "../formelements/errorText";
import { Spinner } from "reactstrap";

const MyForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      messege: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values);

      axios
        .post(
          "https://sheet.best/api/sheets/e332dc07-2fc1-4555-ba5a-4ce5b32c46ef",
          values
        )
        .then((res) => {
          console.log(res);
          props.toggle();
        })
        .catch((error) => {
          console.log(error);
        });

      // connect to google docs
      setIsLoading(false);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "maximum length is 15 letters")
        .required("Name is mandatory"),
      email: Yup.string().email("Invalid email address").required("required"),
      messege: Yup.string()
        .min(5, "comment must be at least 5 letters long")
        .required("Can't send an empty messege"),
    }),
  });

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <label>name</label>
        <input
          id="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <ErrorText error={formik.errors.name} /> : null}

        <label>email</label>
        <input
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <ErrorText error={formik.errors.email} /> : null}

        <label>your message</label>
        <textarea
          id="messege"
          type="text"
          rows={5}
          onChange={formik.handleChange}
          value={formik.values.messege}
        />
        {formik.errors.messege ? (
          <ErrorText error={formik.errors.messege} />
        ) : null}

        {isLoading ? (
          <div className="self-end m-[10px]">
            <Spinner />
          </div>
        ) : (
          <button className="bg-cMain" type="submit" disabled={!formik.isValid}>
            Send!
          </button>
        )}
      </form>
    </div>
  );
};

export default MyForm;
