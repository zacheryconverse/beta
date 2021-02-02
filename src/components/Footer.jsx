import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h4">Create | View | Share</CardHeader>
        <CardBody>
          <CardTitle className="h5 lead">Get specific with your climbing beta and never forget a move</CardTitle>
          {/* <CardText>
            Route Beta makes it possible to create, view, and share the details of any climb.
          </CardText> */}
          <Button href="mailto:zacheryconverse@gmail.com">Contact Me</Button>
        </CardBody>
        <CardFooter><a href="zacheryconverse.github.io">About - Free Stickers - Terms - Privacy - </a><a href="mailto:zacheryconverse@gmail.com">zacheryconverse@gmail.com</a></CardFooter>
      </Card>
    </div>
  );
};
// what could I put in the footer?

export default Footer;
