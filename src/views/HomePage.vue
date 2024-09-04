<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card>
        <q-card-section class="row items-center">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            class="q-ma-md"
            style="max-width: 200px;"
            alt="Logo"
          />
          <div>
            <h1 class="q-mt-none q-mb-xs">Gestão de Produtos e Vendas</h1>
            <p class="q-mt-none">
              Bem-vindo ao sistema de gestão de produtos e vendas. Aqui você pode
              gerenciar seus produtos, visualizar estoque, registrar vendas e muito mais.
            </p>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-btn
            label="Gerenciar Produtos"
            color="primary"
            @click="$router.push('/products')"
            class="q-ma-sm"
          />
          <q-btn
            label="Gerenciar Vendas"
            color="primary"
            @click="$router.push('/sales')"
            class="q-ma-sm"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
/* Adicione estilos personalizados, se necessário */
</style>
