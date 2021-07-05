import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloudIcon from '@material-ui/icons/Cloud';

export const SidebarData = [
    {
        title:'Booker',
        icon:<AccountCircleIcon/>,
        link:'/booker'
    },
    {
        title:'Distributer',
        icon:<AccountBoxIcon/>,
        link:'/distributer' 
    },{
        title:'Product',
        icon:<CloudIcon/>,
        link:'/product'
    }
]