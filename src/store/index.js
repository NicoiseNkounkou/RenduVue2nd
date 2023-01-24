import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        name : "Ordinateur HP",
        price: 500, 
        stock: 10
      },
      {
        name: "Table en Bois",
        price: 150, 
        stock: 30
      },
      {
        name : "Ipad",
        price: 879, 
        stock: 100
      },
      {
        name: "Television",
        price: 1000, 
        stock: 25
      },
      {
        name: "Souris",
        price: 40, 
        stock: 0
      },
    ]
  },
  getters: {
  },
  mutations: {
    ajoutProduct(state, product){
      state.products.push(product)
    },
  },
  actions: {
  },
  modules: {
  }
})
