import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
    const initialState = {
        id: 6758, 
        avatar: "https://robohash.org/sedlaborereiciendis.png?size=300x300&set=set1", 
        email: "ellamae.runolfsdottir@email.com",
        password: "iEdgYAqGMy",
        phone_number: "+238 318.894.1985 x551",
        username: "ellamae.runolfsdottir",
        coin: {
            coin_name: "Zcash", 
        }
    }
    const rootURL = 'https://random-data-api.com/api'
    const [userId, setUserId] = useState(0)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([initialState])

    const getUser = async () => {
        setLoading(true)
        const promise1 = await fetch(`${ rootURL }/users/random_user`)
        const promise2 = await fetch(`${ rootURL }/crypto_coin/random_crypto_coin`)
        try {
            const result = await Promise.allSettled([promise1, promise2])
            const userRes = await result[0].value.json()
            const coinRes = await result[1].value.json()
            const { id, avatar, email, password, phone_number, username } = userRes
            const { coin_name } = coinRes
            const newUsr = { 
                id, 
                avatar, 
                email,
                password,
                phone_number,
                username,
                coin: {
                    coin_name, 
                }
            }

            if ( users.length === 4 ) {
                const tempUsers = [...users]
                setUsers([...tempUsers.slice(1), newUsr])
            } else {
                setUsers([...users, newUsr])
            }

            setUserId(users.length < 4 ? users.length : users.length - 1)
            setLoading(false)
          
        } catch (error) {
            console.log(error);
        } 
    }

    const value = {
        userId,
        setUserId,
        users,
        loading,
        getUser,
    }

    return (
        <Context.Provider value={ value }>
            { children }
        </Context.Provider>
    )
}