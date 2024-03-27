import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({userInfo}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d2f7anuvnar8n5.cloudfront.net/external_assets/examples/lady_v2/result.svg" />
      <Card.Body>
        <Card.Title>{userInfo?.name}</Card.Title>
        <Card.Text>
          
          {userInfo?.username}
          {userInfo?.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;