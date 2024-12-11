import React from "react";

type Props =  {
    count: number,
    price: number,  
};

export const TotalArea: React.FC<Props> = (props) => {
    
    return(
        <div className="flex-content">
            <span className="flex-item">{props.count} 名様</span>
            <span className="flex-item">合計 {props.price}円</span>
        </div>
    )
};