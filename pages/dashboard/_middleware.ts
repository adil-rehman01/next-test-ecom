import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { parseCookies } from 'nookies'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const cookie = parseCookies()
    const token =  cookie.token ? cookie.token : ""
    console.log(token)
    if(token == '' ){
        return NextResponse.redirect("/");
    }
    return NextResponse.next()
}