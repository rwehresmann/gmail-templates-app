import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import { removeSnippet, fetchSnippets } from './Utils';

export default function SnippetsList() {
  const data = fetchSnippets();
  const [snippets, setSnippets] = useState(data);

  const addInDraft = (snippet) => {
    window.parent.postMessage(snippet.text, '*');
  }

  const handleRemoveSnippet = (id) => {
    removeSnippet(id);

    setSnippets(fetchSnippets());
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#/templates/new">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="New snippet" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            { snippets.length > 0 ? "My snippets" : "You don't have any snippets yet" }
          </ListSubheader>
        }>
          {snippets.map((snippet, index) =>
            <ListItem 
              key={snippet.id} 
              disablePadding 
              onClick={addInDraft.bind(this, snippet)}
              secondaryAction={
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <IconButton edge="end" aria-label="edit" component="a" href={`#/templates/${snippet.id}/edit`}>
                      <EditIcon />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <IconButton edge="end" aria-label="delete" onClick={handleRemoveSnippet.bind(this, snippet.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              }
            >
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
    </Box>
  );
}
