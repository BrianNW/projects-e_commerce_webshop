import React from 'react';
import Grid from '@material-ui/core'

// products array as each object with it's own id
const products = [
    { id: 1, name: 'Shoes', description: 'Running shows.'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook.'},
]
const Product = () => {
    <main>
        <Grid container justify = "center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;