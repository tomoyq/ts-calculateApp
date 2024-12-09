import React, { useState } from 'react'
import './App.css'
import { FormArea } from './components/FormArea/FormArea'

const App: React.FC = () => {
    const [adult, setAdult] = useState(0);
    const [student, setStudent] = useState(0);
    const [child, setChild] = useState(0);
    const [baby, setBaby] = useState(0);

    return (
        <div className='app'>
            <FormArea />
        </div>
    )
}

export default App
