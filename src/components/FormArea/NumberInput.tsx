import React from "react";

type Props = {
    category: string,
    discription: string | null,
    price: number,
    state: number,
    handleChange: (category: string, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NumberInput: React.FC<Props> = (props) => {
    return (
        <div className="flex-content">
            <div className="flex-item">{props.category}</div>
            <div className="flex-item">{props.discription}</div>
            <div className="flex-item">{props.price}円</div>
            <div className="flex-item"><input type="number" min={0} value={props.state} onChange={(e)=>{props.handleChange(props.category, e)}}/>名</div>
        </div>
    )
};