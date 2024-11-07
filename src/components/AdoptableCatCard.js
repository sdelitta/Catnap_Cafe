import { Card, Button } from 'react-bootstrap';

function AdoptableCatCard({ cat }) {
    return (
        <Card style={{ width: '18rem', borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={cat.image} style={{ borderRadius: '15px 15px 0 0' }} />
            <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Card.Text>
                    {cat.description}
                </Card.Text>
                <Button variant="secondary" style={{ backgroundColor: '#a67b5b', border: 'none' }}>Adopt {cat.name}</Button>
            </Card.Body>
        </Card>
    );
}
