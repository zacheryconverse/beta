import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">CLIMB!</CardHeader>
        <CardBody>
          <CardTitle className="h5">Get specific with your beta and never forget a move</CardTitle>
          <CardText className="lead">
            Route Beta makes it possible to create, view, and share the details of any climb.
            Registered users can access available route descriptions or create a new set of moves it
            takes to reach the top!
          </CardText>
          <Button href="https://www.linkedin.com/in/zachery-converse/">Contact Me</Button>
        </CardBody>
        <CardFooter className="text-muted">About - Free Stickers - Terms - Privacy</CardFooter>
      </Card>
    </div>
  );
};
//

export default Footer;
