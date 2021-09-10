import React from 'react'
import NavBar from "../view/NavBar"
import SideBar from '../view/SideBar'
import {Grid} from "@material-ui/core"
import Card from "../view/Card"
import Dialog from "../view/Dialog"

function HomePage() {
    return (
        <>
        <NavBar/>
            <Grid container >
                <Grid xs={2}>
                    <SideBar/>
                </Grid>
                <Grid xs={9} style={{marginTop:"70px"}}>
                    <div>
                     <h1>Project list </h1>
                    <Dialog/>
                    </div>
               

                    <Grid container>
                        <Grid xs={3} spacing={3} style={{margin:"10px"}} >
                            <Card/>
                        </Grid>
                        <Grid xs={3} spacing={3} style={{margin:"10px"}} >
                            <Card/>
                        </Grid>
                        <Grid xs={3} spacing={3} style={{margin:"10px"}} >
                            <Card/>
                        </Grid>
                        <Grid xs={3} spacing={3}  style={{margin:"10px"}}>
                            <Card/>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </>
    
    )
}
export default HomePage;
