<template lang="">
    <div>
        <h2>{{products.name}}</h2>
        <span>{{products.price}}</span>
        <span>{{products.stock}}</span>
    </div>
</template>
<script>
export default {
    name: 'CarteProduct', 
    props: [
        'product'
    ], 

    methods: {
        increment (){
            this.$store.commit('increment')
        }
    }
}
</script>
<style scoped >
    


    div {
        width: 200px;
        margin: 0 auto;
        height: 200px;
        background-color: brown;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>