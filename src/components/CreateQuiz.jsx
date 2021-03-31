import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function CreateQuiz() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="questionTitle" placeholder='Type question title here' ref={register({ required: true })}/>
            <input name='answer1' placeholder='Type first answer here' ref={register({ required: true })}/>
            <input name='answer2' placeholder='Type second answer here' ref={register({ required: true })}/>
            <input name='answer3' placeholder='Type thrd answer here' ref={register({ required: true })}/>
            <input name='answer4' placeholder='Type fourth answer here' ref={register({ required: true })}/>
            {(errors.questionTitle || errors.answer1 || errors.answer2 || errors.answer3 || errors.answer4) && <span>This field is required</span>}

            <input type="submit" />
            </form>
        </div>
    )
}