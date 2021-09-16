import React, { useContext, useState } from 'react'
import Loading from './Loading'
import { Context } from '../context'
import styled from 'styled-components'
import { RiBankCardLine, RiSmartphoneLine } from 'react-icons/ri'
import { CgPassword } from 'react-icons/cg'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'

const User = () => {
    const { userId, users, loading } = useContext(Context)
    const [contentIndex, setContentIndex] = useState(0)
    const { 
        avatar,
        email, 
        password, 
        phone_number, 
        username, 
        coin: {
            coin_name, 
        } 
    } = users[userId]
    
    const content = [
        <>
            <div className="text-center">Username</div>
            <h2 className="text-center">{ username }</h2>
        </>,
        <>
            <div className="text-center">Email</div>
            <h2 className="text-center">{ email }</h2>
        </>,
        <>
            <div className="text-center">Password</div>
            <h2 className="text-center">{ password }</h2>
        </>,
        <>
            <div className="text-center">Currently hodling</div>
            <h2 className="text-center">{ coin_name }</h2>
        </>,
        <>
            <div className="text-center">Phone number</div>
            <h2 className="text-center">{ phone_number }</h2>
        </>
    ]
    
    return (
        <Wrapper className="wrapper">
            {loading 
                ? <Loading />
                : <div className="avatar-wrapper"><img src={ avatar } alt={ username } /></div>
            }                
           <div>
                {! loading && content[contentIndex]}
            </div>
            <div className="button-wrapper">
               <button
                    aria-label="user name"
                    className="btn"
                    onClick={ () => setContentIndex(0) }
                    onKeyPress={ () => setContentIndex(0) }
                >
                    <AiOutlineUser />
                </button>
                <button
                    aria-label="address"
                    className="btn"
                    onClick={ () => setContentIndex(1) }
                    onKeyPress={ () => setContentIndex(1) }
                >
                    <AiOutlineHome />
                </button>
                <button
                    aria-label="password"
                    className="btn"
                    onClick={ () => setContentIndex(2) }
                    onKeyPress={ () => setContentIndex(2) }
                >
                    <CgPassword />
                </button>
                <button
                    aria-label="hodl"
                    className="btn"
                    onClick={ () => setContentIndex(3) }
                    onKeyPress={ () => setContentIndex(3) }
                >
                    <RiBankCardLine />
                </button>
                <button
                    aria-label="phone number"
                    className="btn"
                    onClick={ () => setContentIndex(4) }
                    onKeyPress={ () => setContentIndex(4) }
                >
                    <RiSmartphoneLine />
                </button>
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 3rem 1rem;

    img {
        border-radius: 50%;
        max-width: 12rem;
    }

    .avatar-wrapper {
        border-radius: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        height: 12rem;
        justify-content: center;
        max-width: 12rem;
        margin-bottom: 3rem;
    }

    h2 {
        margin-top: 1rem;
    }

    .button-wrapper {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }

    .btn {
        background: var(--clr-beta);
        margin: 0 1rem;
        
        svg {
            color: var(--clr-psi);
            font-size: 2.4rem;
        }
    }

    @media screen and (max-width: 768px) {
        .btn {
            margin: 0 0.4rem;
            height: 48px;
            width: 48px;
        }
    }
`

export default User
