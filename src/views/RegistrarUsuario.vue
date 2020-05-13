<template>

<div class="registrarUsuario">
    <div class="modal fade" id="registroUsuarioModal" tabindex="-1" role="dialog" aria-labelledby="registrarUsuario" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title text-center" id="registrarUsuarioCenterTitle">Registro de usuarios</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" id="nombre" placeholder="Por favor escribe tu nombre"
                        v-model="nombre">
                        <small id="nombreHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Por favor escribe tu correo electrónico"
                        v-model="email">
                        <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="user" placeholder="Por favor escribe tu contraseña"
                        v-model="password">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info"  data-dismiss="modal" @click="registrar">Aceptar</button>
                    </div>
                </div> <!-- modal-body -->
            </div> <!-- modal-content -->
        </div> <!-- modal-dialog  -->
    </div> <!-- modal -->
</div> <!-- registrarUsuario -->

</template>

<script>
    
import {fb} from '../firebase';
    
export default {
    
  name: 'registrar-usuario',
  props: {
    msg: String
  },
    data() {
        return {
            nombre: null,
            email: null,
            password: null
        }
    },
    
    methods: {
        registrar: function() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((usuario) => {
                    $('#registroUsuario').modal('hide');
                })
                .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
