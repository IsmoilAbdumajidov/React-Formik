import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import FormControl from './reusableFormik/FormControl'
const LoginForm = () => {
    // initila values
    const initialValues = {
        email: "",
        password: "",
    }
    // validation
    const validationSchema = Yup.object({
        email: Yup.string().email("Email xato kiritildi").required("Ma'lumot kiritlmadi"),
        password: Yup.string().required("Ma'lumot kiritilmadi").max(8,"8 tadan ortiq parol kiritilmaydi").min(3,"3 tadan kam ma'lumot kirtilmaydi")
    })
    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form data", values)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }
    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {
                formik =>
                (
                    <Form className='flex mx-auto flex-col sm:w-[600px] p-4 rounded-lg shadow-lg shadow-sky-200 gap-3 mt-10'>
                        <FormControl control={"input"} name={"email"} type={"email"} label={"Email"} className="border outline-none p-2 rounded w-full" />
                        <FormControl maxLength={8} control={"input"} name={"password"} type={"password"} label={"Password"} className="border outline-none p-2 rounded w-full" />
                        <button disabled={!formik.isValid || formik.isSubmitting} type='submit' className='bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 text-center rounded'>Submit</button>
                    </Form>
                )

            }
        </Formik>
    )
}

export default LoginForm