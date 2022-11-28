import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col} from 'react-bootstrap';
import '../pages/product.css';

const Product = () => {
    const url = "https://fakestoreapi.com/products";
    const [Products, setProducts] = useState([]);
    const getDataProducts = async () => {
        const response = await fetch(url);
        const DataProduct = await response.json();
        setProducts(DataProduct);
        console.log(Products);
    }
    useEffect(() => {
        getDataProducts();
    },[]
    );
        return(
            <Container >
            <h1 className="headline">Fashion Olshop Gajelas</h1>
                <Row md={6} className="p-5" >
                    {Products.map((product) => {
                        return(
                            <div key={product.id}>
                        <Col > 
                        <ProductCard
                        product={product}/> 
                        </Col>
                        </div>)
                        })
                    }
                </Row>
            </Container>
        )
    }

export default Product;