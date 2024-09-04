<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ isEditMode ? 'Editar Produto' : 'Criar Produto' }}</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="handleSubmit">
       <p>ID do Produto: {{ productId }}</p>
        <q-input
          v-model="localProduct.description"
          label="Descrição"
          required
        />
        <q-input
          v-model.number="localProduct.price"
          label="Preço"
          type="number"
          required
        />
        <q-input
          v-model.number="localProduct.stockQuantity"
          label="Estoque"
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
  name: 'ProductsCreatePage',
  props: {
    product: {
      type: Object,
      default: () => ({
        id: '',
        description: '',
        price: 0,
        stockQuantity: 0
      })
    },
    isEditMode: {
      type: Boolean,
      default: false
    },
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localProduct: { ...this.product }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isEditMode) {
          await axios.put(`http://127.0.0.1:8000/api/products/products/${this.productId}/`, this.localProduct)
        } else {
          await axios.post('http://127.0.0.1:8000/api/products/products/', this.localProduct)
        }
        this.$router.push(`/products`)
      } catch (error) {
        console.error('Erro ao salvar produto:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
