<template>
  <div>
    <navCom></navCom>
    <div >
      <Nuxt/>
    </div>
    <fotr></fotr>
  </div>
</template>

<script>
import navCom from '../components/navCom.vue';
import fotr from '../components/fotr.vue'

export default {
  name: "main_layout",
  components: {
    navCom,
    fotr
  },
  middleware: 'authenticated',
  data: ()=>({
    mousePosition: null,
  }),
  methods: {}
 
}
</script>

  
