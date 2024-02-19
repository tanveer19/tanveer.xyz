import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faBootstrap,
  faReact,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { faNode } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      <main id="home">
        <div className="text-center">
          <h1 className="text-5xl">
            Tanveer Hossain Jony
            {/* <span className="text-secondary">Hossain</span> */}
          </h1>

          <h2 className="text-3xl my-4">Front End Developer</h2>

          <h2 className="text-3xl mb-8">
            {/* <Link to="/work" className="nav-link"> */}
            My Projects
            {/* </Link> */}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 ">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/a12-512.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Karate Camp
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn karate from famous instructors!
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
                <a
                  target="_blank"
                  href="https://a12-summer-camp-1ce70.web.app/"
                >
                  Live Site
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/a11-512.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Toy Story
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A toy store for your favorite toys!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  target="_blank"
                  href="https://github.com/tanveer19/A11-toy-story-client"
                >
                  Client
                </a>
              </Button>
              <Button size="small">
                <a
                  target="_blank"
                  href="https://github.com/tanveer19/A11-toy-story-server"
                >
                  Server
                </a>
              </Button>
              <Button size="small">
                <a target="_blank" href="https://a11-toy.web.app/">
                  Live Site
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/a10-512.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cafe Onion
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your delicious recipes!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  target="_blank"
                  href="https://github.com/tanveer19/A10-cafe-onion-client"
                >
                  Client
                </a>
              </Button>
              <Button size="small">
                <a
                  target="_blank"
                  href="https://github.com/tanveer19/A10-cafe-onion-server"
                >
                  Server
                </a>
              </Button>
              <Button size="small">
                <a
                  target="_blank"
                  href="https://a10-chef-recipe-hunter-8182f.web.app"
                >
                  Live Site
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </main>
      <div>
        <h2 className="text-3xl text-center mb-8">Skills:</h2>
        <Marquee>
          <div className="flex space-x-8 my-4">
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            <FontAwesomeIcon icon={faBootstrap} size="4x" />
            <FontAwesomeIcon icon={faSquareJs} size="4x" />
            <FontAwesomeIcon icon={faReact} size="4x" />
            <FontAwesomeIcon icon={faNode} size="4x" />
            <FontAwesomeIcon icon={faSquareGithub} size="4x" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
