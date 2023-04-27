import React from 'react';
import Card from 'react-bootstrap/Card';
import left1 from "/images/1.png";
import left2 from "/images/2.png";
import left3 from "/images/3.png";
import { FaCalendar } from 'react-icons/fa';


const UnderLeft = () => {
    return (
        <div className='mt-4'>
            <Card className='mb-3'>
                <Card.Img variant="top" src={left1} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <span>Sports</span>
                    <div>
                        <span><FaCalendar /></span>
                        <span className='ms-3'>Jan, 4, 2023</span>
                    </div>
                </Card.Footer>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src={left2} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <span>Sports</span>
                    <div>
                        <span><FaCalendar /></span>
                        <span className='ms-3'>Jan, 4, 2023</span>
                    </div>
                </Card.Footer>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src={left3} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <span>Sports</span>
                    <div>
                        <span><FaCalendar /></span>
                        <span className='ms-3'>Jan, 4, 2023</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default UnderLeft;