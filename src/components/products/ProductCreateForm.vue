<template>
  <h3>Adding a product</h3>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title"> name</label>
      <input type="text" name="title" v-model="title" />
    </div>

    <div class="form-group">
      <label for="name">description</label>
      <br />
      <input type="text" name="description" v-model="description" />
    </div>

    <div class="form-group">
      <label for="image">image URL</label>
      <br />
      <input type="text" name="image" v-model="image" />
    </div>

    <div class="form-group">
      <label for="price">price</label>
      <br />
      <input type="number" name="price" v-model="price" />
    </div>

    <base-button name="Add">

    </base-button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
      price: null
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('product/add', {
        id: (new Date).toISOString(),
        image: this.image,
        title: this.title,
        description: this.description,
        price: this.price,
      });
      this.image = '';
      this.title = '';
      this.description = '';
      this.price = null;
    }
  }
}
</script>

<style scoped>
.form-group {
  padding: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem .5rem;
  border: 1px solid #45006d;
  border-radius: 3px;
}
</style>