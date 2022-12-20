<template>
  <ul>
    <product-item v-for="prod in products" :key="prod.id" :id="prod.id" :title="prod.title" :image="prod.image"
      :description="prod.description" :price="prod.price"></product-item>
  </ul>
</template>


<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  computed: {
    products(){
      return this.$store.getters['product/items'];
    }
  }
}
</script>