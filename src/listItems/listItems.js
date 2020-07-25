
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon >
        <DashboardIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
   
    <ListItem button>
      <ListItemIcon>
        <PersonAddIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

