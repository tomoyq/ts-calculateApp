import React from 'react'
import './App.css'
import { FormArea } from './components/FormArea/FormArea'
import { TotalArea } from './components/TotalArea'
import { useCategories } from './hooks/useCategories'

const App: React.FC = () => {
    const {adult, student, child, baby, count, price,  handleChange} = useCategories();

    const handle = (category: string, e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(category, e);
    };

    return (
        <div className='app'>
            <FormArea adult={adult} student={student} child={child} baby={baby} function={handle} />
            <TotalArea count={count} price={price}/>
        </div>
    )
}

export default App
 