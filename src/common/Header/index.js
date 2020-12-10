import React from 'react'
import './style.css'
import LanguageSelection from './LanguageSelection'
import Logo from './Logo'

export default function Header(props)
{
    return(
        <div className="head">
            <div>
                <Logo/>
            </div>
            <h1>
                <LanguageSelection OnLanguageChange = {props.OnLanguageChange} />
            </h1>
        </div>
    )
}