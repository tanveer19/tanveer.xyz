import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
      <main id="home">
        <div>
          <h1 className="lg-heading">
            Tanveer Hossain Jony
            {/* <span className="text-secondary">Hossain</span> */}
          </h1>

          <h2>Front End Developer</h2>

          <h2>
            <Link to="/work" className="nav-link">
              🔥 My Projects
            </Link>
          </h2>
        </div>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/img/a10-512.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                target="_blank"
                href="https://github.com/tanveer19/A12-karate-camp-client"
              >
                Client
              </a>
            </Button>
            <Button size="small">
              <a
                target="_blank"
                href="https://github.com/tanveer19/A12-karate-camp-server"
              >
                Server
              </a>
            </Button>
            <Button size="small">
              <a target="_blank" href="https://a12-summer-camp-1ce70.web.app/">
                Live Site
              </a>
            </Button>
          </CardActions>
        </Card>

        <div className="icons">
          <a href="https://github.com/tanveer19" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://twitter.com/thjbd19" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tanveer-hossain-jony/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </main>
      {/* <div className="element"></div> */}
    </div>
  );
};

export default Home;
