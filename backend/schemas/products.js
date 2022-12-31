export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}