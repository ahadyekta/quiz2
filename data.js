const shoppingCard = {
    '154' : {
        productName: 'Power bank',
        categoryId: 701,
        weight: 500,
        price: 350,
        quantity: 1
    },
    '185' : {
        productName: 'Blue Dress',
        categoryId: 702,
        weight: 1500,
        price: 250,
        quantity: 1
    },
    '124' : {
        productName: 'Red Dress',
        categoryId: 702,
        weight: 500,
        price: 150,
        quantity: 2
    },
    '500' : {
        productName: 'Asus Laptop',
        categoryId: 701,
        weight: 3500,
        price: 1250,
        quantity: 1
    },
    '700' : {
        productName: 'Harry Potter',
        categoryId: 703,
        weight: 50,
        price: 30,
        quantity: 1
    },
}

const categoryDetails = {
    701: {
        name: 'tech',
        icon: '🖥️',
    },
    702: {
        name: 'book',
        icon: '📖',
    },
    703:{
        name: 'dress',
        icon: '👗',
    },
    704:{
        name: 'home',
        icon: '🏠',
    }
}

const deliveryPriceForMaxWeight = {
    500: 10,
    1000: 18,
    2000: 26,
    3000: 35,
    4000: 44,
    8000: 53,
    10000: 62,
    20000: 80,
}

module.exports = {
    shoppingCard,
    categoryDetails,
    deliveryPriceForMaxWeight
}