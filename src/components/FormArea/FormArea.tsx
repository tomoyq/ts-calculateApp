import React from "react";
import { NumberInput } from "./NumberInput";

export const FormArea: React.FC = () => {
    type ItemContent = {
        category: string,
        discription: string | null,
        price: number,
    };

    const itemContent: ItemContent[] = [
        {
            category: '大人',
            discription: null,
            price: 1000
        },
        {
            category: '学生',
            discription: '中学生・高校生',
            price: 700
        },
        {
            category: '子供',
            discription: '小学生',
            price: 300
        },
        {
            category: '幼児',
            discription: '未就学児',
            price: 0
        },
    ]

    return (
        <div className="form-area">
            {itemContent.map((value, index) => {
                return (
                    <NumberInput key={index}
                        category={value.category} 
                        discription={value.discription} 
                        price={value.price}
                    />
                )
            })}
        </div>
    )
};