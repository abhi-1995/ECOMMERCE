import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Produuct from '../components/Produuct'
import products from '../products'  

const HomeScreen = () => {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4}>
                        <Produuct product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
