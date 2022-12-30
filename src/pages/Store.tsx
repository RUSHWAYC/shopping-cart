import React from 'react'
import storeItems from '../data/storeItems'
import { Row, Col } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} lg={3} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store