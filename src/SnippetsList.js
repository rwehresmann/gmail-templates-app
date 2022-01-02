import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import ListSubheader from '@mui/material/ListSubheader';
import { addSnippet, removeSnippet, fetchSnippets } from './Utils';

export default function SnippetsList() {
  const addInDraft = (snippet) => {
    window.parent.postMessage(snippet.text, '*');
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            My snippets
          </ListSubheader>
        }>
          {fetchSnippets().map((snippet, index) =>
            <ListItem key={snippet.id} disablePadding onClick={addInDraft.bind(this, snippet)}>
              <ListItemButton>
                <ListItemText 
                  primary={snippet.name} 
                  secondary={snippet.text} 
                />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Make this draft a snippet" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Manage snippets" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
