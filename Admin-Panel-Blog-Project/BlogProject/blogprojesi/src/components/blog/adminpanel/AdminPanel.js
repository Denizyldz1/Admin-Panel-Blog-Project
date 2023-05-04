import React from 'react'
import { Outlet } from 'react-router-dom'
import DataContext, { dataContext } from '../context/DataContext'
import Aside from './Aside'
import Nav from './Nav'


function AdminPanel(p) {

    return (
        <>
            <Nav />
            <Aside />
            <Outlet/>
            </>

    )
}

export default AdminPanel