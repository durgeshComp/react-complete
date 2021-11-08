import React, { useState } from 'react'
import './Navigation.css'
import { menu } from '../../helper/menu';
import { hasChildren } from '../../helper/utils';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

export default function Navigation() {
    return menu.map((item, key) => <MenuItem key={key} item={item} />)
}

const MenuItem = ({ item }) => {
    console.log('items: ', item);
    const Component = hasChildren(item) ? MultiLevel : SingleLevel
    return <Component item={item} />
}

const SingleLevel = ({ item }) => {
    return (
        <ListItem button to={item.path}>
            <Link to={item.path} style={{display: 'flex', flexDirection: 'row', textDecoration: 'none', color: 'white' }}>
                <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
            </Link>
        </ListItem>
    );
};

const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    }

    return (
        <>
            <ListItem button onClick={handleClick}>
                <Link to={item.path} style={{display: 'flex', flexDirection: 'row', textDecoration: 'none', color: 'white'}}>
                    <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </Link>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children.map((child, key) => (
                        <MenuItem key={key} item={child} />
                    ))}
                </List>
            </Collapse>
        </>
    )
}

