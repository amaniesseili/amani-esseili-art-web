
<script>
	export default {

	}
</script>


<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg custom-nav">
      <div class="container">
        <a class="navbar-brand" href="#"> <img src="/amani-white-logo.png" class="logo" alt=""></a>
        <!-- ---------button toggler---------- -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- --------------------------------- -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-5 custom-nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Biography</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Artworks</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Exhibitions</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Media</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Contact</a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
                <img src="/Flag_of_en.png" class="flags" alt="">
              </a>
              <!----- dropdown menu for languages ----->
              <ul class="dropdown-menu p-1 ">
                <li class="amani-dropdow-nav ">
                  <a class="dropdown-item" href="#"><img src="/Flag_of_en.png" class="flags" alt=""> English </a>
                </li>
                <li class="amani-dropdow-nav">
                  <a class="dropdown-item" href="#"><img src="/Flag_of_it.png" class="flags" alt=""> Italian</a>
                </li>
                <li class="amani-dropdow-nav">
                  <a class="dropdown-item" href="#"> <img src="/Flag_of_lb.png" class="flags" alt=""> Arabic</a>
                </li>
              </ul>
              <!-- ---------------------- -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    amani esseili
  </div>
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