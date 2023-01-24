<template >
    <div >
        <h1>Les produits de la boutique</h1>
        <CarteProduct :product="products"/>
        <!-- <h2>{{ products.name }}</h2>
        <span>{{ products.price }}</span>
        <span>{{ products.stock }}</span>-->
    </div> 
</template>
<script>
import CarteProduct from '@/components/CarteProduct.vue';
export default {
    name: 'ProductView',
    components :{
        CarteProduct
    },

    computed : {
        products(){
            return this.$store.state.products
        }
},

methods: {
        display (){
            this.$store.commit('display')
        }
    }
}
</script>
<style >
    
</style>