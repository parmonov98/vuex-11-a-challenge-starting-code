<template>
  <base-section>
    <base-button @click="setTab('products-list')" :class="{ active: isProductListButtonActive }"
      :style="{ marginRight: '12px' }" name="Product List"></base-button>
    <base-button @click="setTab('product-create-form')" :class="{ active: isAddProductButtonActive }"
      name="Add product"></base-button>
  </base-section>
  <base-section>
    <keep-alive>
      <component :is="tab"></component>
    </keep-alive>
  </base-section>

</template>

<script>
import ProductCreateForm from '../components/products/ProductCreateForm.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import ProductsList from './ProductsList.vue';

export default {
  components: {
    ProductCreateForm,
    BaseButton,
    ProductsList,
  },
  created: function () {
    this.setTab('products-list');
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    isProductListButtonActive() {
      return this.tab === 'products-list';
    },
    isAddProductButtonActive() {
      return this.tab === 'add-product';
    },
  },
  methods: {
    setTab(name) {
      this.tab = name;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  max-width: 40rem;
}
</style>