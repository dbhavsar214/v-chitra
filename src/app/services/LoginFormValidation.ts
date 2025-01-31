'use server';

import * as yup from 'yup';

interface loginFormValues {
    userName: string
    password: string
}

const loginFormSchema = yup.object().shape({
    userName: yup.string().matches(/^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i, "11 characters for Username OR Email").required("Email Or Username required"),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character").required("Password Required")
})

export const validateLoginForm = async (loginFormData: loginFormValues) => {
    try {
        await loginFormSchema.validate(loginFormData, { abortEarly: false });
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        return err.inner.map((error: yup.ValidationError) => ({ field: error.path, message: error.message }));
    }
}














