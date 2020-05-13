<template>
   <div class="pregunta">
        <div class="card">
         <div class="card-header bg-info text-white">
            <h4>Libros de la Biblia</h4>
          </div>
          <div class="card-body">
            <div class="acordeon">
              <div class="acordeon-item" >
                  <input type="checkbox" name="acordeon" id="acordeon-item-1">
                  <label for="acordeon-item-1"class="acordeon-titulo"><h5>Antiguo Testamento</h5></label>
                  <div class="acordeon-contenido" >
                    <div class="acordeon-item d-inline-block mr-2" v-for="(libro, index) in biblia.antinguo_testamento" :key="libro">
                      <span>{{ libro }} &bull;</span>
                    </div>
                  </div>
              </div>
              <div class="acordeon-item" >
                  <input type="checkbox" name="acordeon" id="acordeon-item-2">
                  <label for="acordeon-item-2"class="acordeon-titulo"><h5>Nuevo Testamento</h5></label>
                  <div class="acordeon-contenido" >
                    <div class="acordeon-item d-inline-block mr-2" v-for="(libro, index) in biblia.nuevo_testamento" :key="libro">
                      <span>{{ libro }} &bull;</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
   </div>
</template>

<script>

import {fb, db} from '../firebase';

export default {
  name: 'libro',
  props: {
    msg: String
  },
  data() {
    return {
      biblia: {
        antinguo_testamento: [],
        nuevo_testamento: []
      }
    }
  },
  created() {
    const antiguo = db.collection('biblia').doc('antiguo_testamento');
    const nuevo = db.collection('biblia').doc('nuevo_testamento');
    
    antiguo.get()
    .then((doc) => {
      if( doc.exists ) {
         this.biblia.antinguo_testamento  = doc.data().libros;
      } else {
        console.error('Documento no existe');
      }
    })

    nuevo.get()
    .then((doc) => {
      if( doc.exists ) {
         this.biblia.nuevo_testamento  = doc.data().libros;
      } else {
        console.error('Documento no existe');
      }
    })

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
