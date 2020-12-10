import React from 'react'
import { TextField } from '@material-ui/core'

export default function SearchBar(props)
{
    return(
        <TextField onChange={props.onChange}></TextField>
    )
}