import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'


const Container = styled.div``


function Signup() {
    return (
        <Container>
            <BackgroundImage/>
            <Header/>
            <div className='body flex column a-center j-center'>
                <div className="text flex column">
                    <h1>UNLIMITED MOVIES AND TV SHOWS</h1>
                    <h4>WATCH ANYWHERE, CANCEL ANYTIME.</h4>
                    <h6>READY TO WATCH? ENTER YOUR EMAIL TO CREATE ACCOUNT</h6>
                </div>
                <div className="form">
                    <input type='email' placeholder='Email address' name='email'/>
                    <input type='password' placeholder='password' name='password'/>
                    <button>GET STARTED</button>
                </div>
                <button>GET STARTED</button>
            </div>
        </Container>
      )
}
export default Signup;