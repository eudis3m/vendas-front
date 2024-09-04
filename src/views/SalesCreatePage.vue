<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ isEditMode ? 'Editar Venda' : 'Criar Venda' }}</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="handleSubmit">
        <q-select
          v-model="localSale.productId"
          :options="productOptions"
          label="Produto"
          emit-value
          map-options
          required
        />
        <q-input
          v-model.number="localSale.quantity"
          label="Quantidade"
          type="number"
          required
        />
        <q-input
          v-model.number="localSale.unitPrice"
          label="Preço Unitário"
          type="number"
          required
        />
        <div class="q-mt-md">
          <q-btn type="submit" label="Salvar" color="primary" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SalesCreatePage',
  props: {
    isEditMode: {
      type: Boolean,
      default: false
    },
    saleId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      localSale: {
        productId: null,
        quantity: 0,
        unitPrice: 0
      },
      productOptions: []
    }
  },
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products/products/')
      this.productOptions = response.data.map(product => ({
        label: product.description,
        value: product.id
      }))
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
    }

    if (this.isEditMode && this.saleId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/sales/${this.saleId}/`)
        this.localSale = response.data
      } catch (error) {
        console.error('Erro ao carregar venda:', error)
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isEditMode) {
          await axios.put(`http://127.0.0.1:8000/api/products/sales/${this.saleId}/`, this.localSale)
        } else {
          await axios.post('http://127.0.0.1:8000/api/products/sales/', this.localSale)
        }
        this.$router.push('/sales')
      } catch (error) {
        console.error('Erro ao salvar venda:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
