/*

1: Find all information about each product.
db.products.find()

2: Find the product which are between 400 to 800.
db.products.find({ product_price : { $gte:400 , $lte800} })

3: Find the product which are not between 400 to 600.
db.products.find({ $or: [ { product_price: { $lt: 400}} , { product_price: { $gt: 600}} ]})

4: List the 4 products which are greater than 500 in price.
db.products.find({product_price: { $gt : 500}}).limit(4)

5: Find product name and product material for each product.
db.products.find().projection({ product_name:1 , product_material:1})

6: Find the product with row id of 10.
db.products.find({id:"10"})

7: Find only product name and product material.
db.products.find().projection({ product_name:1 , product_material:1})

8: Find all the products which contain the value of soft in product material.
   db.products.find({product_material: "Soft"})

9: Find products which contains product color indigo and product price 492.00.
   db.products.find({ product_color:"indigo" , product_price: 492})
   
10: Delete the products which product price value are same.
Solution:
db.products.deleteMany({
    "product_price": {
        "$in": db.products.aggregate([
            {
                "$group": {
                    "_id": "$product_price",
                    "count": { "$sum": 1 }
                }
            },
            {
                "$match": {
                    "count": { "$gt": 1 }
                }
            }
        ]).map(doc => doc._id)
    }
})

*/