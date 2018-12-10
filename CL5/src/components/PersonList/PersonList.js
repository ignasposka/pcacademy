import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PersonList(props) {
  const { list } = props;

  return (
    <div>{
      list.map((person) =>
        <List key={person.id} component="nav">
          <ListItem button>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {person.name} {person.last_name}
                </Typography>
                <Typography color="textSecondary">
                  {person.email}
        </Typography>
                <Typography component="p">
                  {person.gender}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        </List>)
    }
    </div>
  );
}

export default PersonList;