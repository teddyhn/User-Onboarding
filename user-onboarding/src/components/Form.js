import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({ errors, touched, values }) {
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="name" name="name" placeholder="Name" />
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <label>
                <Field type="checkbox" name="tos" checked={values.tos} />
                Accept Terms of Service
            </label>
            <button>Submit</button>
        </Form>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            tos: tos || false,
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Please enter your name."),
        email: Yup.string()
            .email("Please enter a valid email address.")
            .required("A valid email address is required."),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Please enter a valid password.")
    }),

    handleSubmit(values) {
        console.log(values);
    }
})(LoginForm);

export default FormikLoginForm;