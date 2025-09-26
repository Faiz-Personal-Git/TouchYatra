import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    FirstName: Yup.string().required("First Name is required."),
    LastName: Yup.string().required("Last Name is required."),
    Email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
    Phone: Yup.string()
        .required("Phone is required")
        .matches(/^\d{10}$/, "Phone must be exactly 10 digits"),
    Password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters")
        .max(16, "Password must be no more than 16 characters")
        .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            "Password must include at least 1 uppercase letter, 1 number, and 1 special character"
        ),
    ConfirmPassword: Yup.string()
        .required("Confirm Password is required.")
        .oneOf([Yup.ref('Password')], "Passwords do not match"),
    DisplayName: Yup.string()
        .required("Display Name is required."),
    AgreeTerms: Yup.bool()
        .oneOf([true], "You must accept the terms and condition")

});
