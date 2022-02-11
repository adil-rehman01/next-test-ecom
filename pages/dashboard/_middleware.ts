import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const token =  req.cookies.token ? req.cookies.token : ''
    if(token == '' ){
        return NextResponse.redirect("/");
    }
    return NextResponse.next()
}