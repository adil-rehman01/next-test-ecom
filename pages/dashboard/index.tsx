import Head from "next/head";
import React from "react";
import NavBar from "../../components/dashboard/nav-bar";
const Index = () => {

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;