import Head from 'next/head'
import { Fragment } from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
    background-color: #333;
    color:#f1f1f1;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
                <style>
                    {`
                        body {
                            background-color: #f1f1f1;
                            margin: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                        }
                    `}

                </style>
            </Head>
            <NavBar>
                <h1>Home</h1>
            </NavBar>
        </Fragment>
    )
}
export default Home;

