export default{
  state(){
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://media.istockphoto.com/id/865700880/photo/view-from-tent-to-the-mountain-sport-and-active-life-concept.jpg?b=1&s=170667a&w=0&k=20&c=pOxhyb_xzHNzk9O-a3B38JB9sXvqbJMqYDsh5_2FIi4=',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    }
  },
  getters: {
    products(state, getters) {
      console.log(getters);
      return state.products;
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.unshift(payload);
    },
  }
};