import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import FormControl from './reusableFormik/FormControl'

const EnrollmentForm = () => {
    // select options
    const dropdownOptions = [
        { key: "Select your course", value: "" },
        { key: "React", value: "react" },
        { key: "Angular", value: "angular" },
        { key: "Vue", value: "vue" },
    ]
    // checkbox options
    const checkboxOptions = [
        { key: "HTML", value: "HTML" },
        { key: "CSS", value: "css" },
        { key: "JavaScript", value: "javascript" },
    ]
    // inital valus
    const initialValues = {
        email: "",
        bio: "",
        course: "",
        skills: [],
        courseDate: "",
    }
    // validation with Yup
    const validationSchema = Yup.object({
        email: Yup.string().required("Ma'lumot kiritilmadi").email("Email xato kiritildi"),
        bio: Yup.string().required("Ma'lumot kiritilmadi"),
        course: Yup.string().required("Ma'lumot kiritilmadi"),
        courseDate: Yup.date().required("Ma'lumot kiritilmadi").nullable(),
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
                        <FormControl control={"textarea"} label={"Bio"} name={"bio"} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"select"} label={"Course"} name={"course"} options={dropdownOptions} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"checkbox"} label={"Your skills"} name={"skills"} options={checkboxOptions} className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"date"} label={"Course date"} name={"courseDate"} className="border outline-none p-2 rounded w-full" />
                        <button disabled={!formik.isValid || formik.isSubmitting} type='submit' className='bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 text-center rounded'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default EnrollmentForm