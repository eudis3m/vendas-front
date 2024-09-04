<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Gestão de Produtos e Vendas
        </q-toolbar-title>
        <q-btn flat label="Home" @click="navigateToHome" />
        <q-btn flat label="Produtos" @click="navigateToProducts" />
        <q-btn flat label="Vendas" @click="navigateToSales" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateToHome() {
      this.$router.push('/')
    },
    navigateToProducts() {
      this.$router.push('/products')
    },
    navigateToSales() {
      this.$router.push('/sales')
    }
  }
}
</script>

<style>
/* Adicione seus estilos aqui, se necessário */
</style>
