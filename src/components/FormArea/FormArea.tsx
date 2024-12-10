import React from "react";
import { NumberInput } from "./NumberInput";
import { useCategories } from "../../hooks/useCategories";

export const FormArea: React.FC = () => {

    const {adult, student, child, baby, handleChange} = useCategories();

    return (
        <div className="form-area">
            <NumberInput category={'大人'} discription={null} price={1000} state={adult} handleChange={handleChange}/>
            <NumberInput category={'学生'} discription={'中学生・高校生'} price={700} state={student} handleChange={handleChange}/>
            <NumberInput category={'子供'} discription={'小学生'} price={300} state={child} handleChange={handleChange}/>
            <NumberInput category={'幼児'} discription={'未就学児'} price={0} state={baby} handleChange={handleChange}/>
        </div>
    )
};