<template>
<div class="container">
    <br><h2><strong> Apúntate aquí para inscribirte </strong></h2><br>
        
<!-- Formulario para añadir personas -->

        <section class="form">
            <form action="" class="text-center">
                <input v-model="nombre" @keyup.enter="crearPersona" type="text" class="form-control" placeholder="Piloto y copiloto">
                <input v-model="correo" @keyup.enter="crearPersona" type="text" name="correo" placeholder="Modelo coche" class="form-control">
                
                <!-- Botón para añadir -->
                <br><input @click="crearPersona" type="button" value="Añadir" class="btn btn-success">
            </form>
        </section>
        
<!-- Tabla donde se muestran los datos -->
        <section class="data">
            <br><table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Piloto y copiloto</th>
                        <th scope="col">Modelo coche</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, index) in personas" :key="persona.id">
                        <td>{{ persona.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ persona.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="correoActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ persona.correo }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>




    <script>
    export default {
        data() {
        return {
            // Input nombre
            nombre: '',
            // Input edad
            correo: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            correoActualizar: '',
            // Lista de personas
            personas: [] 
         }
    },
        methods: {
            crearPersona: function () {
                
                // Anyadimos a nuestra lista
                this.personas.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    correo: this.correo
                });
                
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.correo = '';
            },
            verFormActualizar: function (persona_id) {
                
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = persona_id;
                this.nombreActualizar = this.personas[persona_id].nombre;
                this.correoActualizar = this.personas[persona_id].correo;
                
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarPersona: function (persona_id) {
                
                // Borramos de la lista
                this.personas.splice(persona_id, 1);
            },
            guardarActualizacion: function (persona_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;

                // Actualizamos los datos
                this.personas[persona_id].nombre = this.nombreActualizar;
                this.personas[persona_id].correo = this.correoActualizar;
            }
        }


    }
</script>