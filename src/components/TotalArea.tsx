import React from "react";
import { useTotal } from "../hooks/useTotal";


export const TotalArea: React.FC = () => {
    const {count, price} = useTotal();
    
    return(
        <div className="flex-content">
            <span className="flex-item">{count} 名様</span>
            <span className="flex-item">合計 {price}円</span>
        </div>
    )
};