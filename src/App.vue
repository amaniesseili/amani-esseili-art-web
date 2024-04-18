
<script>


export default {

}
</script>

<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg custom-nav">
      <div class="container">
        <a class="navbar-brand" href="#"> <img src="/amani-white-logo.png" class="logo" alt="amani esseili logo"></a>
        <!-- ---------button toggler---------- -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- --------------------------------- -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <!--  -->
            
            <!--  -->
            <li class="nav-item me-5 custom-nav-item">
              <router-link to="/" class="nav-link">{{ $t('home') }}</router-link>
            </li>
            <li class="nav-item me-5">
              <router-link to="/biography" class="nav-link" >{{ $t('biography') }}</router-link>
            </li>
            <li class="nav-item me-5">
              <router-link to="/artworks" class="nav-link" >Artworks</router-link>
            </li>
            <li class="nav-item me-5">
              <router-link to="/exhibitions" class="nav-link" >Exhibitions</router-link>
            </li>
            <li class="nav-item me-5">
              <router-link to="/media" class="nav-link" >Media</router-link>
            </li>
            <li class="nav-item me-5">
              <router-link to="/contact" class="nav-link" >Contact</router-link>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
                <img src="/Flag_of_en.png" class="flags" alt="">
              </a>
              <!----- dropdown menu for languages ----->
              <ul class="dropdown-menu p-1 ">
                <li class="amani-dropdow-nav ">
                  <a class="dropdown-item"><img src="/Flag_of_en.png" class="flags" alt=""> English </a>
                </li>
                <li class="amani-dropdow-nav">
                  <a class="dropdown-item"><img src="/Flag_of_it.png" class="flags" alt=""> Italian</a>
                </li>
                <!-- <li class="amani-dropdow-nav">
                  <a class="dropdown-item" href="#"> <img src="/Flag_of_lb.png" class="flags" alt=""> Arabic</a>
                </li> -->
              </ul>
              <!-- ---------------------- -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  <!-- ---------main---------- -->
  <main>
    <router-view></router-view>
  </main>
  <!-- --------footer---------- -->
  <footer>

  </footer>
</template>


<style lang="scss">
@use "./styles/partials/variables" as *;

/* Stili specifici della Navbar */
.logo{
  width: 7rem;
}
.custom-nav{
  background-color: $primary-color;
}

.custom-nav a {
  color: white;
}

.custom-nav a:hover{
  color: red; 
}
.amani-dropdow-nav{
  background-color: $primary-color;
}
.flags {
  width: 1.5rem;
  border: 0.5px solid rgb(220, 217, 217);
}
/*---------------------------*/


</style>