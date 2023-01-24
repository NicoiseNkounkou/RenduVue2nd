<template >

    <div>
        <h1>Ajouter un produit</h1>
      
        <form @submit.prevent="ajoutProduct"> 
    <input type="text" placeholder="nom du produit" v-model="formData.name">
    
    <div>
        <input type="number" placeholder="prix" v-model="formData.price">
        <input type="number" placeholder="stock" v-model="formData.stock">
        <button type="submit">Ajouter</button>
    </div>
    </form>

    <div class="cartes">
        <div v-for="product in products" :key="product.name" >
            
        </div>
       </div>
    </div>
</template>
<script>

export default {
    name: 'FormView',
 
    computed : {
        products(){
            return this.$store.state.products
        }
},
    
     data(){
        return {
            formData: {
                name: '',
                price: null,
                stock: null
            },
        }
    },
    methods: {
        ajoutProduct(){
                    if(this.formData.name == '' || this.formData.price == null|| this.formData.stock == null )  return
                    if(this.$store.state.products.find(product => product.name == this.formData.name)) return
                    this.$store.commit('ajoutProduct', this.formData)
                    // console.log(ajoutProduct)
                    this.formData ={ 
                            name: '',
                            price: null,
                            stock:null
                        }
                    }
    }
}
</script>
<style >

input {
    border : 1px solid gray
}
button {
    border : 1px solid gray
}
    
</style>