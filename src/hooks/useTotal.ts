import { useCallback, useEffect, useState } from "react";
import { useCategories } from "./useCategories";


export const useTotal = () => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const calculateTotal = (...arg: number[]) => {
        const calculateCount = arg.reduce((sum, value) => (sum += value), 0);
        let calculatePrice = (arg[0] * 1000) + (arg[1] * 700) + (arg[2] * 300);
        
        setCount(calculateCount);
        setPrice(Number(calculatePrice));
    };

    return {count, price, calculateTotal}
};