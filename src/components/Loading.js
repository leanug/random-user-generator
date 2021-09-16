import React from 'react'
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <LdsRing>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LdsRing>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20.5rem;
    width: 100%;
`

const LdsRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 4px;
        border: 4px solid var(--clr-psi);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--clr-psi) transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loading