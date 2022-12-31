import React from 'react'
import { Button, Stack } from 'react-bootstrap'

import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/storeItems'
import formatCurrency from '../utils/formatCurrency'

type CartItemProps = {
    id: number,
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items'>
        {/**Item image.*/}
        <img src={item.imgUrl} style= {{ width: '125px', height: '125px', objectFit: 'cover' }} />
        {/**Item name.*/}
        <div className='me-auto'>
            <div>
                {item.name}
                {/**Number of items. */}
                {
                    quantity > 1 &&
                    <span className='text-muted' style={{fontSize: '.65rem'}}> x{quantity}</span>
                }
            </div>
            {/**Price per piece of the item. */}
            <div className='text-muted' style={{ fontSize: '.75rem'}}>
                {formatCurrency(item.price)}
            </div>
        </div>
        {/**Total of the item. */}
        <div>
            {formatCurrency(item.price * quantity)}
        </div>
        {/**X items. */}
        <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
            &times;
        </Button>
    </Stack>
  )
}

export default CartItem