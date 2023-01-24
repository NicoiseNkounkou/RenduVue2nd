<!-- <template lang="">

    <CarteProduct :product="formData"/>

    <form @submit.prevent="ajoutProduct"> 
    <input type="text" placeholder="nom du produit" v-model="formData.name">
    
    <div>
        <input type="number" placeholder="prix" v-model="formData.price">
        <input type="number" placeholder="stock" v-model="formData.stock">
        <button type="submit">Ajouter</button>
    </div>
    </form>
</template>


<script>

import CarteProduct from './CarteProduct.vue'
export default {
    name: 'FormProd',
    components : {
        CarteProduct
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
                    if(this.formData.name == '' )  return
                    
                    if(this.$store.state.products.find(product => product.name == this.formData.name)) return
                    this.$store.commit('ajoutProduct', this.formData)
                    this.formData ={ 
                            name: '',
                            price: null,
                            stock: null,
                        }
                    }
    }
}

</script>


<style scoped>


    form {
    background-color: #42b983;
    width: 50vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
}
    
</style> -->