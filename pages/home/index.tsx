import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Courier New', Courier, monospace;
    background-color: #333;
    color:#f1f1f1;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const Button = styled.button`
    background-color: #666;
    color: #f1f1f1;
    border: #f1f1f1 solid 1px;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

const Home = () => {
    /*  return (
         <Fragment>
             <Head>
                 <title>Home</title>
                 <style>
                     {`
                         body {
                             background-color: #f1f1f1;
                             margin: 0;
                             padding: 0;
                             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                         }
                     `}
 
                 </style>
             </Head>
             <NavBar>
                 <div className="img-container">
                     <Image src="/image/logo_anemia_poetry.png" alt="logo" width={'50px'} height={'50px'} />
                 </div>
                 <Button>
                     Login
                 </Button>
             </NavBar>
         </Fragment>
     ) */

    return (
        <></>
    )
}
export default Home;

