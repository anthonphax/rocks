import * as React from 'react';
import json from './menu.json';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function MenuNav() {
  return (
    <section>
      <List>
        <ListItem button>
          <ListItemText> Usina: {json.state} </ListItemText>
        </ListItem>
        <select>
          {json.menu.map((menu) => {
            return <option key={menu.id} value={menu.id}>{menu.link}</option>
          })}
        </select>
        <ListItem button>
          <ListItemText> {json.datetime} </ListItemText>
        </ListItem>
      </List>
    </section>
  )
}

export default function MenuJson() {
  return (
    <section>
      <h1>Amazing App</h1>
      <MenuNav />
      <MenuNav />
      <MenuNav />
    </section>
  );
}