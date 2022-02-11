import React, { createContext, useState } from 'react'

type defaultType = {
}

const defaultValues: defaultType = {
}

const DefaultContext = createContext(defaultValues)

const DefaultProvider = ({children}: any) => {

    const [loading, setLoading] = useState(true)

    return (
        <DefaultContext.Provider value={{ 
            loading, setLoading
        }}>
            { children }
        </DefaultContext.Provider>
    )
}

export { DefaultProvider, DefaultContext }