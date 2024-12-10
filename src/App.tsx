import React from 'react'
import './App.css'
import { FormArea } from './components/FormArea/FormArea'
import { TotalArea } from './components/TotalArea'

const App: React.FC = () => {

    return (
        <div className='app'>
            <FormArea />
            <TotalArea />
        </div>
    )
}

export default App
