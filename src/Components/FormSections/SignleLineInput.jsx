import React from 'react';
import './SignleLineInput.scss';
import { useInput } from '../../Hooks/useInput';

export default function SignleLineInput(){
    // const initial = { name : "Single Line"};
    const SLI_title = useInput("Signle Line");
    return(
        <div className="SLI-heading">
            <input className="SLI-haading-input" 
                placeholder={SLI_title.value}
                />
        </div>
    );
}