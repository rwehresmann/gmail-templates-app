import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { updateSnippet, findSnippet, Snippet } from './Utils';
import { useHistory } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useParams } from 'react-router-dom';

export default function ValidationTextFields() {
  const history = useHistory();
  const { snippetId } = useParams();
  const snippet = findSnippet(snippetId);
  
  if (!snippet) {
    history.push("/templates");
    return null
  }

  const [name, setName] = useState(snippet.name);
  const [text, setText] = useState(snippet.text);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpdateSnippet = () => {
    if (name === "" || text === "") return
    const snippet = new Snippet(name, text, snippetId);
    updateSnippet(snippet);

    history.push("/templates");
  }

  const textAreaStyles =  {
    width: 255, 
    height: 50, 
    marginLeft: 8, 
    marginTop: 5, 
    marginBottom: 10, 
    borderRadius: 4, 
    borderColor: text == "" ? "rgb(211, 47, 47)" : "rgb(192,192,192)" 
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              value={name}
              error={name == ""}
              label="Title"
              onChange={handleNameChange}
            />
          </div>
            <TextareaAutosize
              value={text}
              placeholder="Snippet"
              style={textAreaStyles}
              onChange={handleTextChange}
            />
          <br/>
          <Grid container justifyContent="space-around" >
            <Button 
              variant="contained" 
              disabled={name === "" || text === ""}
              onClick={handleUpdateSnippet}
            >
              Update
            </Button>
            <Button variant="outlined" href="#/templates">Back</Button>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
