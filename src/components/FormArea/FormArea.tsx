import React from "react";
import { NumberInput } from "./NumberInput";

type Props = {
    adult: number;
    student: number;
    child: number;
    baby: number;
    function: (category: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormArea: React.FC<Props> = (props) => {

    return (
        <div className="form-area">
            <NumberInput category={'大人'} discription={null} price={1000} state={props.adult} handleChange={props.function}/>
            <NumberInput category={'学生'} discription={'中学生・高校生'} price={700} state={props.student} handleChange={props.function}/>
            <NumberInput category={'子供'} discription={'小学生'} price={300} state={props.child} handleChange={props.function}/>
            <NumberInput category={'幼児'} discription={'未就学児'} price={0} state={props.baby} handleChange={props.function}/>
        </div>
    )
};