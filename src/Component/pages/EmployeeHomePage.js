import React from 'react'
import NavBar from "../view/NavBar"
import SideBar from '../view/SideBar'
import {Grid} from "@material-ui/core"
import Card from "../view/Card"

function EmployeeHomePage() {
    return (
        <>
        <NavBar/>
            <Grid container >
                <Grid xs={2}>
                    <SideBar/>
                </Grid>
                <Grid xs={9} >
                    <div>
                     <h1>Projects On which your are currently working </h1>
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
export default EmployeeHomePage;
