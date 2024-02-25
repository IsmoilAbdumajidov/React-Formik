import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import FormControl from './reusableFormik/FormControl'

const RegistrationForm = () => {
    // radio options
    const options = [
        { key: "Email", value: "emailmoc" },
        { key: "Telephone", value: "telephonemoc" }
    ]
    // initial values
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        modeOfContact: "",
        phone: "",
    }
    // validation with Yup
    const validationSchema = Yup.object({
        email: Yup.string().required("Ma'lumot kiritilmadi").email("Email xato kiritildi"),
        password: Yup.string().required("Ma'lumot kiritilmadi"),
        confirmPassword: Yup.string().required("Ma'lumot kiritilmadi").oneOf([Yup.ref("password"), ""], "Parollar mos kelmadi"),
        modeOfContact: Yup.string().required("Ma'lumot kiritilmadi"),
        phone: Yup.string().when("modeOfContact", { is: "telephonemoc", then: () => Yup.string().required("Required"), })
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
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                    <Form className="flex mx-auto flex-col sm:w-[600px] p-4 rounded-lg shadow-lg shadow-sky-200 gap-3 mt-10">
                        <FormControl control={"input"} type={"email"} label={"Email"} name={"email"} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"input"} type={"password"} label={"Password"} name={"password"} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"input"} type={"password"} label={"Confirm Password"} name={"confirmPassword"} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"radio"} label={"Mode of contact"} name={"modeOfContact"} options={options} />
                        <FormControl control={"input"} type={"text"} label={"Phone number"} name={"phone"} className="border outline-none p-2 rounded w-full" />
                        <button disabled={!formik.isValid || formik.isSubmitting} type='submit' className='bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 text-center rounded'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default RegistrationForm