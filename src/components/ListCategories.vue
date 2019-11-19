<template>
  <div>
    <div class="category" v-for="item in categoryDetails">
      <button>Previous</button>
      <div>
        <span class="categoryTitle">{{item.name}}</span>
        <Product v-bind:productList="{value:item.items}"></Product>
      </div>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
import categoryDetails from "../assets/category.json";
import leadershipDetails from "../assets/leadership.json";

import Product from "/src/components/Product";

export default {
  name: "ListCategories",
  components: {
    Product
  },
  computed: {
    categoryDetails() {
      //alert("dsadfdsa");
      return categoryDetails.categories.map(item => {
        // console.log(item.name);

        return item;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categoryTitle {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: rgb(147, 0, 205);
  font-size: 14px;
  align-self: flex-start;
}

button {
  color: black;
  text-align: center;
  height: 30px;
  align-content: center;
}

.category {
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 35%;
}
</style>
