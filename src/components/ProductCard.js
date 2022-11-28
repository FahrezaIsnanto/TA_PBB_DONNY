import { Card, Button, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}){
    const navigate = useNavigate();

    const handleToDetail= (id)=>{
        navigate("/Detail/"+id);
    }

    return (
        <Card className="card">
            <div border="primary" className="product">
            <Image variant="top" src={product.image} height="150" width="125" />
            <Card.Body>
            <Card.Title className="text-start title h3" variant = "light" maxLength="20">{product.title}</Card.Title>
            <Card.Title className="text-start text-warning">${product.price}</Card.Title>
            <Button variant="primary" onClick={()=>handleToDetail(product.id)}>Details</Button>
            </Card.Body>
            </div>
        </Card>

        );
}