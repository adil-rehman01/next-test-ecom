import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { APP_URL } from "../helpers/constants";
import cookie from "js-cookie"
import { useRouter } from "next/router";
import Loader from "../components/svg/Loader";
import { DefaultContext } from "../contexts/DefaultContext";

const SignIn: NextPage = () => {
    // const [sidebar, setsidebar] = useState();
    const {loading, setLoading}: any = useContext(DefaultContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const styles = {
        wrapperContent: {
            width: '800px'
        },
        loginContent: {
            maxWidth: '400px'
        }
    }
    let route = useRouter()

    const login = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const res = await fetch(`${APP_URL}/api/sign-in`, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            return response.json()
        })
        setLoading(false)
        if (res.token != '')
        {
            cookie.set('token', res.token)
            route.push('/dashboard')
        }
    }

    useEffect(() => {
        setLoading(false)
    },[])

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            
            <div className="h-screen bg-gradient-to-b from-indigo-400 to-indigo-900 w-full flex flex-wrap justify-center items-center" style={{
                background: 'linear-gradient(to bottom, #ffff, #312e818a, #312e81)'
             }}>
                <div className="flex flex-col items-center justify-center" style={styles.wrapperContent}>
                    <div className="text-center flex justify-center">
                        <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.6477 59.0909C21.6477 52.0384 17.3438 47.8835 11.6229 47.8835C5.89134 47.8835 1.59801 52.0384 1.59801 59.0909C1.59801 66.1328 5.89134 70.2983 11.6229 70.2983C17.3438 70.2983 21.6477 66.1435 21.6477 59.0909ZM17.674 59.0909C17.674 64.0554 15.1811 66.7507 11.6229 66.7507C8.07528 66.7507 5.57173 64.0554 5.57173 59.0909C5.57173 54.1264 8.07528 51.4311 11.6229 51.4311C15.1811 51.4311 17.674 54.1264 17.674 59.0909ZM39.8304 53.6364H35.7289L31.9576 65.7919H31.7871L28.0265 53.6364H23.9142L29.7417 70H34.003L39.8304 53.6364ZM49.0803 70.3196C53.8743 70.3196 56.9212 66.9425 56.9212 61.8821C56.9212 56.8111 53.8743 53.4233 49.0803 53.4233C44.2862 53.4233 41.2393 56.8111 41.2393 61.8821C41.2393 66.9425 44.2862 70.3196 49.0803 70.3196ZM49.1016 67.2301C46.4489 67.2301 45.1491 64.8651 45.1491 61.8714C45.1491 58.8778 46.4489 56.4808 49.1016 56.4808C51.7116 56.4808 53.0114 58.8778 53.0114 61.8714C53.0114 64.8651 51.7116 67.2301 49.1016 67.2301ZM64.051 60.4119C64.051 58.0469 65.4785 56.6832 67.5133 56.6832C69.5055 56.6832 70.6987 57.9936 70.6987 60.1776V70H74.5552V59.581C74.5659 55.6605 72.3287 53.4233 68.9515 53.4233C66.5012 53.4233 64.818 54.5952 64.0723 56.4169H63.8805V53.6364H60.1944V70H64.051V60.4119ZM78.6461 70H82.5985V62.0099H86.6255L90.9082 70H95.3187L90.5993 61.3494C93.1667 60.3161 94.5197 58.1214 94.5197 55.1598C94.5197 50.9943 91.835 48.1818 86.8279 48.1818H78.6461V70ZM82.5985 58.7287V51.4844H86.2207C89.1717 51.4844 90.4927 52.8374 90.4927 55.1598C90.4927 57.4822 89.1717 58.7287 86.242 58.7287H82.5985ZM108.417 63.1179C108.417 65.6108 106.638 66.8466 104.933 66.8466C103.08 66.8466 101.844 65.5362 101.844 63.4588V53.6364H97.9874V64.0554C97.9874 67.9865 100.225 70.2131 103.442 70.2131C105.892 70.2131 107.618 68.924 108.364 67.0916H108.534V70H112.274V53.6364H108.417V63.1179ZM123.484 70.3196C127.298 70.3196 129.918 68.4553 130.6 65.6108L126.999 65.206C126.477 66.5909 125.199 67.3153 123.537 67.3153C121.044 67.3153 119.393 65.6747 119.361 62.8729H130.76V61.6903C130.76 55.9482 127.308 53.4233 123.281 53.4233C118.594 53.4233 115.536 56.8643 115.536 61.9141C115.536 67.049 118.551 70.3196 123.484 70.3196ZM119.371 60.2734C119.489 58.1854 121.033 56.4276 123.335 56.4276C125.55 56.4276 127.042 58.0469 127.063 60.2734H119.371ZM140.095 70.2876C142.907 70.2876 144.175 68.6151 144.782 67.4219H145.017V70H148.809V48.1818H144.942V56.3423H144.782C144.197 55.1598 142.993 53.4233 140.106 53.4233C136.324 53.4233 133.351 56.3849 133.351 61.8395C133.351 67.2301 136.238 70.2876 140.095 70.2876ZM141.171 67.1236C138.625 67.1236 137.282 64.8864 137.282 61.8182C137.282 58.7713 138.604 56.5874 141.171 56.5874C143.653 56.5874 145.017 58.6435 145.017 61.8182C145.017 64.9929 143.632 67.1236 141.171 67.1236ZM160.163 70.3196C163.977 70.3196 166.598 68.4553 167.28 65.6108L163.679 65.206C163.157 66.5909 161.879 67.3153 160.217 67.3153C157.724 67.3153 156.072 65.6747 156.04 62.8729H167.44V61.6903C167.44 55.9482 163.988 53.4233 159.961 53.4233C155.273 53.4233 152.216 56.8643 152.216 61.9141C152.216 67.049 155.231 70.3196 160.163 70.3196ZM156.051 60.2734C156.168 58.1854 157.713 56.4276 160.014 56.4276C162.23 56.4276 163.722 58.0469 163.743 60.2734H156.051ZM174.559 60.4119C174.559 58.0469 175.986 56.6832 178.021 56.6832C180.013 56.6832 181.206 57.9936 181.206 60.1776V70H185.063V59.581C185.074 55.6605 182.836 53.4233 179.459 53.4233C177.009 53.4233 175.326 54.5952 174.58 56.4169H174.388V53.6364H170.702V70H174.559V60.4119Z"
                                fill="#312e81"
                            />
                            <path
                                d="M69 17.0551C69.0331 25.2688 75.7248 32 83.9453 32C92.1861 32 98.8902 25.2959 98.8902 17.0551V14.9453C98.8902 11.5521 101.651 8.79118 105.044 8.79118C108.438 8.79118 111.199 11.5521 111.199 14.9453C111.199 15.9163 111.986 16.7037 112.957 16.7037H118.232C119.203 16.7037 119.99 15.9163 119.99 14.9453C119.99 6.70457 113.286 0 105.045 0C96.8041 0 90.0995 6.70457 90.0995 14.9453V17.0551C90.0995 20.4489 87.3386 23.2088 83.9458 23.2088C80.5526 23.2088 77.7917 20.4489 77.7917 17.0551C77.7917 16.0842 77.0043 15.2968 76.0333 15.2968H70.7583C69.7874 15.2973 69 16.0842 69 17.0551Z"
                                fill="#312e81"
                            />
                        </svg>
                    </div>
                    <div className="bg-white shadow rounded w-full p-10 mt-16" style={styles.loginContent}>
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800 text-center">
                            Login to your account
                        </p>
                        <p className="text-sm my-4 font-medium leading-none text-gray-500 text-center">
                            Dont have account?{" "}
                            <Link href={'/sign-up'}>
                                <a tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                    {" "}
                                    Sign up here
                                </a>
                            </Link>
                        </p>
                        <form onSubmit={(e) => login(e)}>
                            <div>
                                <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                                <input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <div className="mt-6  w-full">
                                <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                                <div className="relative flex items-center justify-center">
                                    <input aria-label="enter Password" role="input" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button role="button" type="submit" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                loading==true && (
                    <Loader />
                )
            }
        </>
    );
}

export default SignIn;
