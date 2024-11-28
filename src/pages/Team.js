import React from 'react';
import '../Assets/Styles/Team.css'; // Updated CSS import
import { Card, Row, Col } from 'react-bootstrap';
import pic from '../Assets/Images/logo.jpg';

// Team member data
const teamMembers = [
  {
    name: 'FirsName LastName',
    position: 'Chief Executive Officer (CEO)',
    description: 'Mathias drives the vision and mission of the company, ensuring we remain the industry leader with innovation and excellence.',
    image: pic,
  },
  {
    name: 'FirsName LastName',
    position: 'Chief Innovating Officer (CIO)',
    description: 'Shukuruni oversees technological advancements, steering the company towards groundbreaking solutions and a future-ready approach.',
    image: pic,
  },
  {
    name: 'FirsName LastName',
    position: 'Sales and Growth Marketing Manager',
    description: 'Benedict leads the growth strategy, focusing on market expansion and driving unparalleled customer satisfaction.',
    image: pic,
  },
];

const Team = () => {
  return (
    <div className="team-wrapper">
      <h2 className="team-title" data-aos="fade-up">Meet the Team</h2>
      <Row className="team-cards-container mt-5" data-aos="fade-up">
        {teamMembers.map((member, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="team-card-column mb-4">
            <Card className="team-card-box">
              <div className="team-card-image-wrapper">
                <Card.Img variant="top" src={member.image} className="team-card-image" />
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="team-card-subtitle mb-2 text-muted">{member.position}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Team;
