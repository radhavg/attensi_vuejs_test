<template>
  <div>
    <div style="cursor:pointer;"  v-on:click="showLeadership" class="product" v-for="item in getProductsDetails">
      <img class="productImg" v-bind:src="item.product.image">
      <span class="productTitle">{{item.product.title}}</span>
      <img>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: Object
  },
  name: "Product",

  computed: {
    getProductsDetails() {
      //alerObjectt("dsadfdsa");
      return this.productList.value.map(item => {
        //console.log(item.name);
        return item;
      });
    }
  },
  methods: {
    showLeadership: function (event) {
     alert("create leadership board");
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.productContainer {
  cursor: pointer;
}

.productImg {
  width: 100%;
  height: 80%;
}
.product {
  padding: 2px 2px 2px 2px;
  margin: 1px 1px 1px 1px;
  border: solid 1px grey;
  float: left;
  width: 120px;
  height: 100px;
}
.productTitle {
  text-align: center;
  font-size: 12px;
  color: black;
  font-style: bold;
}
</style>
