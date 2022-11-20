<template>
  <div class="title flex-centured" :class="{checked:tarefa.checked}">
    <div class="title-content">
      <div class="title-subtitle">{{tarefa.description}}</div>
     
    </div>

    <div class="title-action">
      <button @click="$emit('toggle',tarefa)" class="btn btn-primary">
        <span v-if="tarefa.checked">Desmarcar</span>
      <span v-else>Concluido</span>
      </button>
      
      <button @click="$emit('remove',tarefa)" class="btn btn-error">Remover</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "TarefaVue",
  props:{
    tarefa:{type:Object,required:true}
  }
};
</script>


<style scoped>
  .checked{
    text-decoration: line-through;
    color: lightgrey;
  }
</style>
