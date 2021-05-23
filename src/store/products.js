const initialState = {
    productList: [
      {
        id: 'eee111eee1',
        name: 'Gaming Laptop Core i7 5.0GHz',
        category: 'Electronics',
        price: 1000.99,
        imgUrl: 'https://www.luluhypermarket.com/medias/1764036-04.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDMyODh8aW1hZ2UvanBlZ3xoMDIvaGU3Lzk4Mjg2MzAzOTY5NTgvMTc2NDAzNi0wNC5qcGdfMTIwMFd4MTIwMEh8NDY3YTY0MjRjYjU3ZTI2ZmNjM2E2NWI2NTU0MDNjZDY1NGY3NWJjZTFlZmE3YmQwZmY3MjU0OTVkMWFmOWU4ZQ'
      },
      {
        id: 'eee111eee2',
        name: 'Canon R5',
        category: 'Electronics',
        price: 2000.99,
        imgUrl: 'https://s.yimg.com/uu/api/res/1.2/DW7TTQGUmMkl7IKXSBUVDQ--~B/aD0xMDExO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/1149db30-7c21-11eb-bc55-ccb54cb6691b.cf.jpg'
      },
      {
        id: 'eee111eee3',
        name: 'PS4 Pro ',
        category: 'Electronics',
        price: 350.99,
        imgUrl: 'https://cdn.mos.cms.futurecdn.net/KnyAxGTfiqdssHHq2VkbF9-480-80.jpg'
      },
      {
        id: 'eee111eee4',
        name: 'xbox one',
        category: 'Electronics',
        price: 300.99,
        imgUrl: 'https://www.cnet.com/a/img/nzH2GfD0EjA9N4r6e9B2S8AZPFI=/940x0/2013/12/13/3cbd69ed-5151-46fb-bee4-f29affaccd02/Xbox_One_35657846_top01.jpg'
      },
      {
        id: 'eee111eee5',
        name: 'Dell 15" Lcd Monitor E156fpb',
        category: 'Electronics',
        price: 145,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/412mSUbJoZL._AC_.jpg'

      },
      {
        _id: 'fff111fff1',
        name: 'Pizza',
        category: 'Food',
        price: 50,
        imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg'

      },
      {
        _id: 'fff111fff2',
        name: 'Pasta',
        category: 'Food',
        price: 40,
        imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400'
      },
      {
        _id: 'fff111fff3',
        name: 'Creamy Garlic Butter Chicken',
        category: 'Food',
        price: 70,
        imgUrl: 'https://cookthestory.com/wp-content/uploads/2019/11/Creamy-Garlic-Chicken-1392x780.jpg'
      },
      {
        _id: 'fff111fff4',
        name: 'salad',
        category: 'Food',
        price: 40,
        imgUrl: 'https://img.bestrecipes.com.au/4bBXatUR/w643-h428-cfill-q90/br/2019/10/spiced-lamb-sausage-fattoush-954624-1.jpg'
      },
      {
        _id: 'fff111fff5',
        name: 'Burger',
        category: 'Food',
        price: 40,
        imgUrl: 'https://www.telegraph.co.uk/content/dam/recipes/2020/06/24/burger_trans_NvBQzQNjv4BqdtaxvlHqYPsdUgQyQhTjC0kV-fxhmkakBrobUzFV1S4.png'
      },
    ],
    activeProduct: ''
  }
  
  export default function productReducer( state = initialState , action) {
    const { type, payload } = action;

    switch (type) {
      case 'ACTIVE':
        const products = getProducts(payload.category);
        return { ...state, products: products };

      default:
        const products1 = getProducts('Electronics');
        return { ...state, products: products1 };    }
  }
  
  export function getProducts(category) {
    const products = initialState.productList;
    
    const products1 = products.filter(element =>{
        if(element.category === category){
            return true;
        }
    })      
    return products1;
  }
  