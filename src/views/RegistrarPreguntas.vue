<template>

<div class="registrar-preguntas">
    <div class="modal fade" id="registroPreguntasModal" tabindex="-1" role="dialog" aria-labelledby="registroPreguntasModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title text-center" id="registroPreguntasModalCenterTitle">Registro de preguntas</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" id="nombre" placeholder="Por favor escribe tu pregunta"
                        v-model="preguntas.descripcion">
                        <small id="nombreHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="form-group">
                                <input type="text" class="form-control" id="respuesta-descripcion-0" placeholder="Por favor escribe una respuesta"
                                v-model="preguntas.respuestas[0].descripcion">
                                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="custom-control custom-radio mt-4">
                                <input type="radio" class="custom-control-input" name="esCorrecta" id="respuesta-1"
                                 @click="setRepuestaCorrecta(preguntas.respuestas[0])">
                                <label class="custom-control-label" for="respuesta-1">Es correcta </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="form-group">
                                <input type="text" class="form-control" id="respuesta-descripcion-1" placeholder="Por favor escribe una respuesta"
                                v-model="preguntas.respuestas[1].descripcion">
                                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="custom-control custom-radio mt-4">
                                <input type="radio" class="custom-control-input" name="esCorrecta" id="respuesta-2"
                                @click="setRepuestaCorrecta(preguntas.respuestas[1])">
                                <label class="custom-control-label" for="respuesta-2">Es correcta </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="form-group">
                                <input type="text" class="form-control" id="respuesta-descripcion-2" placeholder="Por favor escribe una respuesta"
                                v-model="preguntas.respuestas[2].descripcion">
                                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="custom-control custom-radio mt-4">
                                <input type="radio" class="custom-control-input" name="esCorrecta" id="respuesta-3"
                                @click="setRepuestaCorrecta(preguntas.respuestas[2])">
                                <label class="custom-control-label" for="respuesta-3">Es correcta </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="form-group">
                                <input type="text" class="form-control" id="respuesta-descripcion-3" placeholder="Por favor escribe una respuesta"
                                v-model="preguntas.respuestas[3].descripcion">
                                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="custom-control custom-radio mt-4">
                                <input type="radio" class="custom-control-input" name="esCorrecta" id="respuesta-4"
                                @click="setRepuestaCorrecta(preguntas.respuestas[3])">
                                <label class="custom-control-label" for="respuesta-4">Es correcta </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="antiguoTestamentoRadio" class="custom-control-input"
                                v-model="esTestamento" :value="true">
                                <label class="custom-control-label" for="antiguoTestamentoRadio">Antiguo Testamento</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="nuevoTestamentoRadio" class="custom-control-input"
                                v-model="esTestamento" :value="false">
                                <label class="custom-control-label" for="nuevoTestamentoRadio">Nuevo Testamento</label>
                            </div>
                        </div>
                    </div>
                    <template v-if="esTestamento">
                        <div class="form-group">
                            <select class="form-control" v-model="preguntas.libro">
                                <option v-for="antiguo in biblia.antiguoTestamento" :key="antiguo">{{ antiguo }}</option>
                            </select>
                        </div>
                    </template>
                    <template v-else>
                        <div class="form-group">
                            <select class="form-control" v-model="preguntas.libro">
                                <option  v-for="nuevo in biblia.nuevoTestamento" :key="nuevo">{{ nuevo }}</option>
                            </select>
                        </div>
                    </template>
                    <div class="form-group">
                        <input type="text" class="form-control" id="cita" placeholder="Por favor escribe la cita biblica"
                        v-model="preguntas.cita">
                        <small id="nombreHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-info"  data-dismiss="modal" @click="registrar" :disabled="! canGuardar">Guardar</button>
                    </div>
                </div> <!-- modal-body -->
            </div> <!-- modal-content -->
        </div> <!-- modal-dialog  -->
    </div> <!-- modal -->
</div> <!-- registrarUsuario -->

</template>

<script>
    
import {fb, db} from '../firebase';
    
export default {
    
  name: 'registrar-preguntas',
  props: {
    msg: String
  },
 data() {
    return {
        preguntas: {
            descripcion: '',
            libro: '',
            fecha: '',
            timestamp: 0,
            show: false,
            procesada: false,
            showRespuestaCorrecta: false,
            respuestaCorrecta: '',
            cantidadSegundos: 0,
            cantidadSegundosResponder: 0,
            cita: '',
            respuestas: [ { descripcion: '', esCorrecta: false, show: true },
                            { descripcion: '', esCorrecta: false, show: true },
                            { descripcion: '', esCorrecta: false, show: true },
                            { descripcion: '', esCorrecta: false, show: true }
            ]
        },
        esTestamento: true,
        biblia: {
        antiguoTestamento: [],
        nuevoTestamento: [],
      },
      repositorioPreguntas: []
    }
  },
  created() {
    const antiguo = db.collection('biblia').doc('antiguo_testamento');
    const nuevo = db.collection('biblia').doc('nuevo_testamento');
    
    antiguo.get()
    .then((doc) => {
      if( doc.exists ) {
         this.biblia.antiguoTestamento  = doc.data().libros;
      } else {
        console.error('Documento no existe');
      }
    });

    nuevo.get()
    .then((doc) => {
      if( doc.exists ) {
         this.biblia.nuevoTestamento  = doc.data().libros;
      } else {
        console.error('Documento no existe');
      }
    });

    
  },
  computed: {
      canGuardar() {
            let guardar = false;
            let pregunta = this.preguntas;

          if(
              pregunta.descripcion &&
              pregunta.libro &&
              pregunta.cita &&
              pregunta.respuestas[0].descripcion &&
              pregunta.respuestas[1].descripcion &&
              pregunta.respuestas[2].descripcion &&
              pregunta.respuestas[3].descripcion &&
              (
                  pregunta.respuestas[0].esCorrecta ||
                  pregunta.respuestas[1].esCorrecta ||
                  pregunta.respuestas[2].esCorrecta ||
                  pregunta.respuestas[3].esCorrecta 
              )
          ) {
              guardar = true;
          }

          return guardar;
      }
  },

methods: {
    registrar: function() {

        if(this.preguntaExiste(this.preguntas.descripcion)) {
            alert('Pregunta existe.');
        } 
        else {
            this.preguntas.respuestaCorrecta = this.getRepuestaCorrecta();
            
            //trim los datos
            this.trimData();

            //fecha
            let date = new Date();
            let anio = date.getFullYear();
            let mes = date.getMonth();
            mes++;
            mes = (mes < 10) ? '0' + mes : mes;
            let hora = date.getHours();
            hora = (hora < 10) ? '0' + hora : hora;
            let minutos = date.getMinutes();
            minutos++;
            minutos = (minutos < 10) ? '0' + minutos : minutos;
            let segundos = date.getSeconds();
            segundos++;
            segundos = (segundos < 10) ? '0' + segundos : segundos;
            
            let dia = date. getDate();
            this.preguntas.fecha = dia+'-'+mes+'-'+anio+' '+hora+':'+minutos+':'+segundos ;
            console.log('Fecha', this.preguntas.fecha);
        
            //timestamp
            this.preguntas.timestamp = Date.now();

            //registar pregunta
            db.collection("preguntas").add(this.preguntas)
            .then(()=> {
                console.log("Document successfully written!");
                this.resetData();
                /**
                 * Buscar todas las preguntas
                 */
                db.collection("preguntas")
                .orderBy("timestamp", "desc")
                .get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        this.repositorioPreguntas.push(doc.data());
                    });
                });
            })
            .catch((error) => {
                console.error(error);
            });

        }
    },
    getPreguntas(){
        db.collection("preguntas").orderBy("timestamp", "desc")
        .get().then((querySnapshot) => {
           //this.this.repositorioPreguntas = querySnapshot;
            querySnapshot.forEach(function(doc) {
                this.this.repositorioPreguntas.push(doc.data());
            });
        });
    },
    resetData(){
        this.preguntas.descripcion = '';
        this.preguntas.respuestas = '';
        this.preguntas.respuestas[0] = '';
        this.preguntas.respuestas[1] = '';
        this.preguntas.respuestas[2] = '';
        this.preguntas.respuestas[3] = '';
        Object.assign(this.$data, this.$$options.data.apply(this));
    },
    setRepuestaCorrecta: function(respuesta) {
        this.preguntas.respuestas.forEach((respuesta) => {
            respuesta.esCorrecta = false;
        });
        respuesta.esCorrecta = true;
    },
    getRepuestaCorrecta: function() {
        let respuestaCorrecta = '';

        this.preguntas.respuestas.forEach((respuesta) => {
            if(respuesta.esCorrecta) {
                respuestaCorrecta =  respuesta.descripcion;
            }
        });

        return respuestaCorrecta;
    },
    preguntaExiste(preguntaReg) {
        console.log('entrando... preguntaExiste');

        let pregunta =  this.repositorioPreguntas.filter( p => p.descripcion == preguntaReg);
         console.log('pregunta...');
         console.log(pregunta);
        return pregunta.length == 0 ? false : true; 

    },
    trimData() {
        this.preguntas.descripcion = this.preguntas.descripcion.trim();
        this.preguntas.respuestas[0].descripcion = this.preguntas.respuestas[0].descripcion.trim();
        this.preguntas.respuestas[1].descripcion = this.preguntas.respuestas[1].descripcion.trim();
        this.preguntas.respuestas[2].descripcion = this.preguntas.respuestas[2].descripcion.trim();
        this.preguntas.respuestas[3].descripcion = this.preguntas.respuestas[3].descripcion.trim();
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-control-input:checked ~
.custom-control-label::before {
    color: #fff;
    border-color: #007bff;
    background-color: #007bff; 
    
}
</style>
