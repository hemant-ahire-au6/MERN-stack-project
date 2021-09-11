import React from 'react'
import NavBar from "../view/NavBar"
import SideBar from '../view/SideBar'
import {Grid} from "@material-ui/core"
import Card from "../view/Card"
import Dialog from "../view/Dialog"
import Dialog2 from "../view/Dialog2"

function HomePage() {
    return (
        <>
        <NavBar/>
            <Grid container >
                <Grid xs={2}>
                    <SideBar/>
                </Grid>
                <Grid xs={9} >
                <h1>Project list </h1>
                    <div style={{display:"flex"}}>
                    
                    <Dialog/>
                    <Dialog2/>
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
