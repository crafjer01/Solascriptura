<template>
<div class="admin" style="background: #fff">
    <main class="container-fluid">
       <div class="row">
           <div class="col-md-3 bg-info">
                <div class="sidebar-menu mt-5">
                   <a href="#" class="nav-title">SolaScriptura</a>
                   <hr class="nav-title-line">
                    <router-link to="/admin/preguntas" class="nav-link">Preguntas</router-link>
                    <router-link to="/admin/libros" class="nav-link">Libros</router-link>
                    <router-link to="/admin/usuarios" class="nav-link">Usuarios</router-link>
                </div>
           </div>
           <div class="col-md-9">
             <div class="row">
                 <div class="col-md-12 bg-light py-2">
                    <div class="icon-bar float-right text-dark" >
                        <ul class="d-flex">
                            <li class="pr-3">Bienvenido, Carlos Pineda</li>
                            <li class="pr-3">
                               <a href="#" class="d-flex  text-dark">
                                   <span class="material-icons" @click="signOut()">settings_power
                                    </span> 
                               </a>
                            </li>
                        </ul>
                    </div>
                 </div>
             </div>
             <div class="container">
                <div class="row">
                    <div class="col-md-12">
                         <router-view />
                    </div>
                </div>
             </div>
           </div>
       </div>
    </main>

</div>
</template>

<script>

import {fb} from '../firebase';
    
export default {
  name: 'admin',
  props: {
    msg: String
  },
    methods: {
        signOut () {
            fb.auth().signOut()
            .then(() => {
                this.$router.replace('/');
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
