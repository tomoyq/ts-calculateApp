import { useEffect, useState } from "react";


export const useCategories = () => {
    const [adult, setAdult] = useState(0);
    const [student, setStudent] = useState(0);
    const [child, setChild] = useState(0);
    const [baby, setBaby] = useState(0);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);


    const calculateTotal = (...arg: number[]) => {
        const calculateCount = arg.reduce((sum, value) => (sum += value), 0);
        let calculatePrice = (arg[0] * 1000) + (arg[1] * 700) + (arg[2] * 300);
        
        setCount(calculateCount);
        setPrice(calculatePrice);
    };



    const handleChange = (category: string, e: React.ChangeEvent<HTMLInputElement>) => {
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
    };

    useEffect(() => {
        calculateTotal(adult, student, child, baby);
    }, [adult, student, child, baby]);

    return {adult, student, child, baby, count, price, handleChange}
};
