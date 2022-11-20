<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <form @submit.prevent="addTarefa(tarefa)">
        <div class="input-group">
          <input
            type="text"
            class="form-input"
            v-model="tarefa.description"
            placeholder=" Adicionar uma Tarefa"
          />
          <button class="btn btn-success input-group-btn">
            <i class="icon icon-arrow-right"></i> Adicionar
          </button>
        </div>

        <ul class="step">
          <li class="step-item active">
            <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
          </li>
        </ul>
      </form>

      <div class="tarela-list">
        <Tarefa
          v-for="t in tarefas"
          @toggle="toggleTarefa"
          :key="t.id"
          @remove="removeTarefa"
          :tarefa="t"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tarefa from "../src/components/Tarefa.vue";

export default {
  name: "App",
  components: {
    Tarefa,
  },
  data() {
    return {
      tarefas: [],
      tarefa: { checked: false },
    };
  },
  methods: {
    addTarefa(tarefa) {
      tarefa.id = Date.now();

      this.tarefas.push(this.tarefa);
      this.tarefa = { checked: false };
    },
    toggleTarefa(tarefa) {
      const index = this.tarefas.findIndex((item) => item.id === tarefa.id);
      if (index > -1) {
        const checked = !this.tarefas[index].checked;
        this.tarefas[index].checked = checked;
      }
    },
    removeTarefa(tarefa){
      const index = this.tarefas.findIndex((item) => item.id === tarefa.id);
      if (index > -1) {
        this.tarefas.splice(index,1)
      }
    }
  },
};
</script>

<style></style>
