import Card from 'react-bootstrap/Card'

const CardProject = ({ title, description, image, link, lang }) => {
    return (
        <div>
            <Card className='mb-3'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <h4>{title}</h4>
                        </a>
                    </Card.Title>
                    <Card.Text>
                        {description}
                        <p>{lang}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProject