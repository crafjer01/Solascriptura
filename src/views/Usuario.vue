<template>
    <div class="usuario">
        <div class="card">
            <div class="card-header bg-info text-white">
                <h4>Registro de usuario   
                <a data-toggle="modal" data-target="#registroUsuarioModal" class="registrarMas float-right pr-3">+</a></h4>
            </div>
            <div class="card-body">
                   <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
           </div>
        </div>
            <registrar-usuario></registrar-usuario>
    </div>
   

   

</template>

<script>
    
import registrarUsuario from '@/views/RegistrarUsuario.vue'
    
export default {
    name: 'usuario',
      props: {
        msg: String
      },
    components: {
        registrarUsuario
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
