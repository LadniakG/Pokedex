import React from 'react'
import {Select} from '@material-ui/core'
export default function LanguageSelection(props)
{
    function onChange(event){
        props.OnLanguageChange(event.target.value);
    }

    return(
    <div>
        <Select native labelId='demo-simple-select-label' onChange={onChange}>
            <option name="fr">fr</option>
            <option name="en">en</option>
            <option name="ja">ja</option>
            <option name="de">de</option>
            <option name="roomaji">roomaji</option>
        </Select>
    </div>
    );
}