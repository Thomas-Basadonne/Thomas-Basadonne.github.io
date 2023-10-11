<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <footer class="bg-dark text-light py-4 fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex flex-column">
            <h6 class="fw-bold">Informazioni di contatto</h6>
            <span class="my-1">Email: thomasbasadonne@gmail.com</span>
            <span class="my-1">Telefono: +39 3927726384</span>
            <a href="https://www.linkedin.com/in/thomasbasadonne/" class="text-light my-1">LinkedIn</a>
          </div>
          <div class="col-md-4">
            <h6 class="fw-bold">Link utili</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light">Home</a></li>
              <li><a href="#" class="text-light">Chi siamo</a></li>
              <li><a href="#" class="text-light">Servizi</a></li>
              <li><a href="#" class="text-light">Contatti</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h6 class="fw-bold">Social</h6>
            <a href="#" class="text-light">Facebook</a><br>
            <a href="#" class="text-light">Twitter</a><br>
            <a href="#" class="text-light">Instagram</a>
          </div>
        </div>
        <hr class="mt-4">
        <div class="text-center">
          <p class="fs-6">&copy; 2023 Thomas Basadonne. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  </template>
  
  
<style lang="scss" scoped>

</style>