<template>
  <q-page padding>
    <q-btn @click="navigateToCreate" label="Adicionar Venda" color="primary" class="q-mb-md" />
    <q-table
      :rows="sales"
      :columns="columns"
      row-key="id"
      :loading="loading"
      flat
    >
      <template v-slot:body-cell-actions="props">
        <q-td align="right" class="full-width">
          <q-btn @click="navigateToEdit(props.row)" color="primary" icon="edit" round style="width:5.5%"/>
          <q-btn @click="deleteSale(props.row.id)" color="negative" icon="delete" round style="width:6%"/>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SalesPage',
  data() {
    return {
      sales: [],
      loading: true,
      columns: [
        { name: 'productDescription', align: 'left', label: 'Produto', field: 'productDescription' },
        { name: 'quantity', align: 'left', label: 'Quantidade', field: 'quantity' },
        { name: 'unitPrice', align: 'left', label: 'Preço Unitário', field: 'unitPrice'/*, format: val => `R$ ${val.toFixed(2)}`*/ },
        { name: 'actions', align: 'right', label: 'Ações', field: 'actions' }
      ]
    }
  },
  methods: {
    async fetchSales() {
      this.loading = true
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/sales/')
        this.sales = response.data
      } catch (error) {
        console.error('Erro ao buscar vendas:', error)
      } finally {
        this.loading = false
      }
    },
    navigateToCreate() {
      this.$router.push('/sales/create')
    },
    navigateToEdit(sale) {
      this.$router.push(`/sales/edit/${sale.id}`)
    },
    async deleteSale(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/products/sales/${id}/`)
        this.fetchSales()
      } catch (error) {
        console.error('Erro ao excluir venda:', error)
      }
    }
  },
  mounted() {
    this.fetchSales()
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
