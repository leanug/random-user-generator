import React, { createContext, useState } from 'react'
import axios from 'axios'

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
        try {
            await Promise.allSettled([
                axios(`${ rootURL }/users/random_user`),
                axios(`${ rootURL }/crypto_coin/random_crypto_coin`)
            ]).then(results => {
                if (results[0].status === 'fulfilled' && results[1].status === 'fulfilled') {
                    const { data: { id, avatar, email, password, phone_number, username }} = results[0].value
                    const { data: { coin_name }} = results[1].value
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
                }
            })
        } catch (error) {
            console.log(error);
            setLoading(false)
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