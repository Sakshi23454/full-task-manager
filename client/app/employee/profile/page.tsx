"use client"
import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/apis/employee.api'
import React from 'react'

const EmployeeProfile = () => {
    const { data } = useGetProfileQuery()
    const [updateProfile] = useUpdateProfileMutation()

    return <>
        {
            data && <div className="container">
                <div className='card'>
                    <div className="card-header">My Profile</div>
                    <div className="card-body">
                        <div>Name: {data.result.name}</div>
                        <div>Email: {data.result.email}</div>
                        <div>Mobile: {data.result.mobile}</div>
                        <div>Profile: {data.result.profilePic}</div>
                        <div>Account: {data.result.active ? "Active" : "Inactive"}</div>
                    </div>
                </div>
            </div>
        }
    </>
}

export default EmployeeProfile