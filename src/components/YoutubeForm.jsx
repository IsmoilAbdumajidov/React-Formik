import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const YoutubeForm = () => {

    const validate = (values) => {
        const error = {};
        if (!values.name) {
            error.name = "Ma'lumot kiritlmadi"
        }
        else if (!/^[a-z\-]+$/i.test(values.name)) {
            error.name = "invalid email"
        }
        if (!values.channel) {
            error.channel = "Ma'lumot kiritlmadi"
        }
        if (!values.email) {
            error.email = "Ma'lumot kiritlmadi"
        }
        else if (!/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
            error.email = 'Invalid email address';
        }
        console.log(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email));
        console.log(error);
        return error

    }
    console.log();

    const formik = useFormik({
        // + initialValues ichidagi key lar inputlardagi name attribut qiymati bilan birxil bolishi kerak
        initialValues: {
            name: '',
            email: '',
            channel: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate


    })
    // console.log("Form error",formik.errors);

    // function validateEmail(value) {
    //     let error;
    //     if (!value) {
    //         error = "input toldirlimadi"
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //         error = 'Invalid email address';
    //     }
    //     return error;
    // }

    // function validateUsername(value) {
    //     let error;
    //     if (!value) {
    //         error = "input toldirlimadi"
    //     }
    //     else if (!/^[a-z\-]+$/i.test(value)) {
    //         error = 'Invalid username!';
    //     }

    //     return error;
    // }

    // const validate = (values)=>{
    //     console.log(values);
    // }

    // console.log("Form errors", formik.errors);
    console.log("Visited fields", formik.touched);

    return (
        <div className='flex justify-center mt-10'>
            {/* <Formik
                // initialValues={{
                //     username: '',
                //     email: '',
                //     text:""
                // }}
                // onSubmit={values => {
                //     // same shape as initial values
                //     console.log(values);
                //     console.log("Malumot yu");
                // }}
                // validate={validate}
            >
                {() => (
                    // touched bu qaysi inputga toldirilsa faqat shu inpudda xatolik beradi agar touched yozilmasa bitta inputga malumot kiritish bilan barcha error lar ishlab ketadi
                    
                    <Form onSubmit={formik.handleSubmit} className='flex flex-col w-[600px] p-4 rounded-lg shadow-lg shadow-sky-200 gap-3 m-4'>
                        <input name='email' onChange={formik.handleChange} type="email" value={formik.values.email} className='border outline-none p-2 rounded w-full'   />
                        {formik.errors.email && formik.touched.email && <div className='text-[12px] text-red-500'>{formik.errors.email}</div>}
                        <input name='name' onChange={formik.handleChange} type="text" value={formik.values.name} className='border outline-none p-2 rounded w-full'  />
                        {formik.errors.name && formik.touched.name && <div className='text-[12px] text-red-500'>{formik.errors.name}</div>}
                        <input name='channel' type="checkbox"  onChange={formik.handleChange} value={formik.values.channel} className='border outline-none p-2 rounded w-full'  />
                        {formik.errors.email && formik.touched.email && <div className='text-[12px] text-red-500'>{formik.errors.channel}</div>}
                     {console.log(formik.isValid )} 
                        <label className='font-semibold w-max' htmlFor="email">Email</label>
                        <Field  type={"file"} className='border outline-none p-2 rounded w-full' id={"email"} name="email" validate={validateEmail} />
                        {errors.email && touched.email && <div className='text-[12px] text-red-500'>{errors.email}</div>}
                        <label className='font-semibold' htmlFor="name">Name</label>
                        <Field  type={"text"} className="border outline-none p-2 rounded w-full" name="username" id={"name"} validate={validateUsername} />
                        {errors.username && touched.username && <div className='text-[12px] text-red-500'>{errors.username}</div>}
                    {console.log(isValid)}
                        <button   className='bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 text-center rounded' type="submit">Submit</button>
                    </Form>
                )}
            </Formik> */}




            <form onSubmit={formik.handleSubmit} className='flex flex-col w-[600px] p-4 rounded-lg shadow-lg shadow-sky-200 gap-3 m-4'>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold' htmlFor="name">Name</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='border outline-none p-2 rounded w-full' type="text" name="name" id="name" />
                    {/* {formik.errors.name ? <div className='text-red-500 text-sm'>{formik.errors.name}</div> : null} */}
                    {formik.touched.name && formik.errors.name ? <div className='text-red-500 text-sm'>{formik.errors.name}</div> : null}
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-semibold' htmlFor="email">E-mail</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='border outline-none p-2 rounded w-full' type="text" name="email" id="email" />
                    {formik.touched.email && formik.errors.email ? <div className='text-red-500 text-sm'>{formik.errors.email}</div> : null}
                    {/* {formik.errors.email ? <div className='text-red-500 text-sm'>{formik.errors.email}</div> : null} */}
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='font-semibold' htmlFor="channel">Channel</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} className='border outline-none p-2 rounded w-full' type="text" name="channel" id="channel" />
                    {formik.touched.channel && formik.errors.channel ? <div className='text-red-500 text-sm'>{formik.errors.channel}</div> : null}
                    {/* {formik.errors.channel ? <div className='text-red-500 text-sm'>{formik.errors.channel}</div> : null} */}
                </div>
                <div>
                    <button type='submit' className='bg-sky-400 text-white px-3 py-2 text-center rounded'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default YoutubeForm