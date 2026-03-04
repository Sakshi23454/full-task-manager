import React from 'react'
import EmployeeNavbar from '../_components/EmplyeeNavbar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        {<EmployeeNavbar />}
        {children}
    </>
}

export default layout