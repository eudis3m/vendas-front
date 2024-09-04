<template>
  <q-page padding>
    <q-btn @click="navigateToCreate" label="Adicionar Produto" color="primary" class="q-mb-md" />
    <q-table
      :rows="products"
      :columns="columns"
      row-key="id"
      :loading="loading"
      flat
    >
      <template v-slot:body-cell-actions="props">
        <q-td align="right" class="full-width">
          <q-btn @click="navigateToEdit(props.row)" color="primary" icon="edit" round style="width:5.5%"/>
          <q-btn @click="deleteProduct(props.row.id)" color="negative" icon="delete" round style="width:6%"/>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductsPage',
  data() {
    return {
      products: [],
      loading: true,
      columns: [
        { name: 'description', align: 'left', label: 'Descrição', field: 'description' },
        { name: 'price', align: 'left', label: 'Preço', field: 'price'/*, format: val => `R$ ${val.toFixed(2)}`*/ },
        { name: 'stockQuantity', align: 'left', label: 'Estoque', field: 'stockQuantity' },
        { name: 'actions', align: 'right', label: 'Ações', field: 'actions' }
      ]
    }
  },
  methods: {
    async fetchProducts() {
      this.loading = true
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/products/')
        this.products = response.data
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      } finally {
        this.loading = false
      }
    },
    navigateToCreate() {
      this.$router.push('/products/create')
    },
    navigateToEdit(product) {
      this.$router.push(`/products/edit/${product.id}`)
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/products/products/${id}/`)
        this.fetchProducts()
      } catch (error) {
        console.error('Erro ao excluir produto:', error)
      }
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
