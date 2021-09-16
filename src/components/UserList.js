import React, { useContext } from 'react'
import { Context } from '../context'
import styled from 'styled-components'
import { AiOutlineUserAdd } from 'react-icons/ai'

const UserList = () => {
    const { users, getUser, setUserId } = useContext(Context)

    return (
        <Wrapper className="wrapper">
            <button 
                onClick={ getUser }
                onKeyPress={ getUser }
                className="btn"
            >
                <AiOutlineUserAdd />
            </button>
            {users.map((user, index) => {
                return (
                    <button
                        key={ user.id } 
                        onClick={ () => setUserId(index) }
                        className="btn"
                    >
                        <img className="btn-avatar" src={ user.avatar } alt={ user.name } />
                    </button>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;

    img { 
        border-radius: 50%;
    }

    button {
        background: var(--clr-beta);
        margin: 1rem;
        
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

export default UserList
