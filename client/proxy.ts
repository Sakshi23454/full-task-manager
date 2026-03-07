import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

const proxy = (req: NextRequest) => {
    const { pathname } = req.nextUrl
    const admminToken = req.cookies.get("ADMIN")?.value
    const employeeToken = req.cookies.get("EMPLOYEE")?.value
    // console.log(pathname.startsWith("/admin"))   startwith returns boolean

    if (pathname.startsWith("/admin") && !admminToken) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    if (pathname.startsWith("/employee") && !employeeToken) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*", "/employee/:path*"]
}
export default proxy