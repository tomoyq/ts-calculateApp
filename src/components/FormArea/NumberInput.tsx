import React from "react";

type Props = {
    category: string,
    discription: string | null,
    price: number
}

export const NumberInput: React.FC<Props> = (Props) => {
    return (
        <div className="numberInput">
            <div className="flex-item">{Props.category}</div>
            <div className="flex-item">{Props.discription}</div>
            <div className="flex-item">{Props.price}円</div>
            <div className="flex-item"><input type="number" min={0} value={0}/>名</div>
        </div>
    )
};