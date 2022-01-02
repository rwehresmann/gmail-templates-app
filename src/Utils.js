import { v4 as uuidv4 } from 'uuid';

export class Snippet {
  constructor(name, text) {
    this.id = uuidv4();
    this.name = name;
    this.text = text;
  }
}

const DEFAULT_SNIPPETS = [
  new Snippet("Good day", "Have a nice day."),
  new Snippet("Spam check", "Check your spam, please.")
]

const SNIPPET_KEY = "gmail-template-app_snippets"

export function fetchSnippets() {
  if(!localStorage[SNIPPET_KEY]){
    localStorage[SNIPPET_KEY] = JSON.stringify(DEFAULT_SNIPPETS);
  }

  return JSON.parse(localStorage[SNIPPET_KEY]);
}

export function addSnippet(snippet) {
  if (typeof snippet !== Snippet || !snippet.text || !snippet.title ) return

  let snippets = fetchSnippets();
  snippets.push(snippet);

  localStorage[SNIPPET_KEY] = snippets;
}

export function removeSnippet(id) {
  if(!id) return;

  let snippets = fetchSnippets();
  let updatedSnippets = snippets.filter(function(elm, index, arr){ 
    return elm.id !== uuid;
  });  

  localStorage[SNIPPET_KEY] = JSON.stringify(updatedSnippets);
}
