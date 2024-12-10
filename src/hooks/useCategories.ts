import { useCallback, useEffect, useState } from "react";
import { useTotal } from "./useTotal";

export const useCategories = () => {
    const [adult, setAdult] = useState(0);
    const [student, setStudent] = useState(0);
    const [child, setChild] = useState(0);
    const [baby, setBaby] = useState(0);
    const {calculateTotal} = useTotal();

    const handleChange = useCallback((category: string, e: React.ChangeEvent<HTMLInputElement>) => {
        switch (category){
            case '大人':
                setAdult(Number(e.target.value));
                break;
            case '学生':
                setStudent(Number(e.target.value));
                break;
            case '子供':
                setChild(Number(e.target.value));
                break;
            case '幼児':
                setBaby(Number(e.target.value));
                break;
            default:
                break;
        };
    }, []);

    useEffect(() => {
        calculateTotal(adult, student, child, baby);
    }, [adult, student, child, baby]);

    return {adult, student, child, baby, handleChange}
};
