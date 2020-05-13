<template>
<div class="login">
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-info text-white">
            <h5 class="modal-title text-center" id="loginCenterTitle">Por favor inicie sección</h5>
            <button @click="closeModalLogin" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Por favor escribe tu correo electrónico"
                v-model="email" >
                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="user" placeholder="Por favor escribe tu usuario"
                v-model="password">
                <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
              </div>
           </div>
           <div class="modal-footer">
            <button type="button" class="btn btn-info " @click="login" :disabled=" ! puedoLogin">Login</button>
           </div>
        </div>
      </div>
</div>
</div>

</template>

<script>
    
    import {fb} from '../firebase';
    
export default {
  name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((usuario) => {
                    $('#login').modal('hide');
                    this.$router.replace('admin');
                })
                .catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                  } else {
                    alert(errorMessage);
                  }
                  console.log(error);
            });
        },
        closeModalLogin: function() {
          let modal = document.querySelector('#login');
          modal.style.display = 'none';
          modal.classList.remove('show');
        }
    },
    computed: {
        puedoLogin: function() {
            let puede = false;
            
            if(this.email != '' && this.password != '') {
                if(this.email.indexOf('@') != -1) {
                    puede = true;   
                }
            }
            
            return puede;
        }
    }
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
