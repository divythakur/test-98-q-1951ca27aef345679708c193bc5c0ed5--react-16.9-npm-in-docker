import React, { Component } from 'react';
import data from './data.json'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const movies = data.items;


class App extends Component {
  componentDidMount() {
    console.log((data.items))
  }


  render() {
    return (
      <div >
        <h3 className="App" style={{ position:"fixed",top:"0",height:"50px",width:"100%",left:"50%",color:"darkblue"}}>Movies In Banglore</h3>
        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"50px" }}>
          {

            data.items.map((e) => {
              return (
                <div id={`movie-card-${e.movie_id}`} style={{ display: "flex", justifyContent: "space-between" }}>
                  <Card style={{ margin: "20px", width: "104%" }} >
                    <CardActionArea>
                      <Typography gutterBottom variant="h5" component="h2">
                        {e.movie_name}
                      </Typography>
                      <a href={e.movie_trailer}>
                        <CardMedia
                          component="img"
                          alt="Movie"
                          height="300"

                          image={e.movie_poster}
                          title="Movie"
                          style={{ width: "300px" }} /></a>
                      <CardContent>

                        <Typography variant="body2" color="textSecondary" component="p">
                          {e.movie_overview}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>

              );
            })

          }
        </div>
      </div>



    );
  }
}
export default App