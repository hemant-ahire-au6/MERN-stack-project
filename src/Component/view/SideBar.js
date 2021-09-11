import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 64,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem button >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="dashboard" />
                        </ListItem>
                    </Link>

                    <Link to ="/employee">
                        <ListItem button >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Employee Page" />
                        </ListItem>
                    </Link>

                </List>
                <Divider />
                <List>

                    <ListItem button >
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <Link to="/login">
                        <ListItem button >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="logout" />
                        </ListItem>
                    </Link>

                </List>
            </Drawer>

        </div>
    );
}
