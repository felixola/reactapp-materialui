import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'

const CustomBtn = styled(Button) ({
    backgroundColor: '#ffffff',
    borderColor: ' hsl(0, 0%, 41%)',
    color: 'hsl(0, 0%, 41%)',
    fontSize: '15px',
    height: '35px',
    marginTop: '5px',
    borderRadius: '10px',
    textTransform: 'capitalize',
    boxShadow: 'none',

    '&:hover': {
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'black',
        borderColor: 'white',
    },
    '&:active' : {
        backgroundColor: '#373b40',
    }


})

export default CustomBtn;