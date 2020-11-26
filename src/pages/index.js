import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import '@microsoft/mgt';
import { Login } from '@microsoft/mgt-react';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is an example of the <tt>gatsby-starter-basic-bootstrap</tt>{' '}
        starter. 
      </p>
	  <p>
		<mgt-msal-provider client-id={process.env.MS_APP_ID}></mgt-msal-provider>
	  	<Login></Login>
	  </p>
      <p>
        <Button as={Link} to="/about" variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Layout>
);

export default IndexPage;
