<script>
export default {
  
  

}
</script>

<template>
  <div class="content-page">
    <!-- Contenuto della pagina della biografia -->
    <div class="container-fluid">
      <div class="row ">
        <div class="col-lg-6 col-sm-12 bg-text-1-bio ">
          <h2>Lebanese Interior Designer & Creative Artist based in milan</h2>
          <p>Born and raised in Beirut in a family of artists and experts in art and design, her path was already mapped out because she could not have failed to fall in love with the fascination of creating a work of art with a father who was a professor of art history and painting. Her innate talent was encouraged and cultivated both by her parents and by her studies in interior design at the Lebanese University in Beirut and then at the IED European Institute of Design in Milan, the city where she lives and works and where she has also been able to begin her professional artistic career. She currently spends her time creating artworks and consulting in the field of interior design, graphics, and even jewellery design. This enables her to follow her creative flow, which she has managed to transform into the profession of her dreams, the one that her father has always motivated her to pursue.
            Her artistic style is a fusion of Surrealism and Expressionism. Through those realms, she is able to give an incisive and suggestive touch to the emotions she wants to express, thus attracting the audience into her introspective and empathetic world of everything that happens around her and that captures her attention.            
          </p>
        </div>
        <div class="col-lg-6 col-sm-12">
          <img src="/sample-img.jpg" alt="Immagine" class="img-fluid bio-image img-container">
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <img src="/sample-img.jpg" alt="Immagine" class="img-fluid bio-image">
        </div>
        <div class="col-lg-6 col-sm-12 bg-text-2-bio">
          <h2>Amani Esseili's philosophy</h2>
          <p>Amani Esseili's philosophy is to welcome and appreciate every single event, every emotional detail that can make life a wonderful and incredible journey, where materialism and the accumulation of material goods are not fundamental but attention is focused on those little things that make up daily reality and that contemporary man often forgets to consider. It is precisely the attention to the most silent energies, to the most intimate and hidden sensations, to that need to listen to an interiority that is sometimes hidden or immersed in the rapidity of life, that concentrates the artist's expressive tendency and her ability to let out the voice of sentiments. Such sentiments are at times linked to a more intimate and personal sphere, and at others extend to broader concepts that are shared by a common gaze that Amani Esseili manages to involve; the pictorial touch is always soft, shaded, suffused, precisely to interpret the introspection necessary to place oneself in a position of attentive listening, to carry out that immersion in one's own depths in relation to fragments of life, points of observation of reality and events that have happened and that have had the power to shake the soul and come to terms with emotions</p>
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.content-page{
  margin-top: 4rem;
  margin-left: 0;
  margin-right: 0;
}
.container-fluid{
  padding-left: 0;
  padding-right: 0;

}
.col-lg-6{
  padding-left: 0;
  padding-right: 0;
  height: 50vh;
}
.row{
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;

}
.bio-image {
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  transition: transform 0.3s ease;

}
.bio-image:hover {
  transform: scale(0.95);
}
.bg-text-1-bio{
  text-align: center;
  padding: 4rem;
  background-color: $light-background-color;
  transition: background-color 0.3s ease; 
  overflow-y: auto;
}

.bg-text-2-bio{
  text-align: center;
  padding: 4rem;
  background-color: $box-4-color;
  transition: background-color 0.3s ease; 
  overflow-y: auto;
}

@media screen and (max-width: 991px) { /* Tablet */
  .bg-text-1-bio,
  .bg-text-2-bio {
    height: 100%; /* Altezza automatica per adattarsi alla lunghezza del testo */
    
  }
}

@media screen and (max-width: 767px) { /* Telefono */
  .bg-text-1-bio,
  .bg-text-2-bio {
    height: auto; /* Altezza automatica per adattarsi alla lunghezza del testo */

  }
}

.bg-text-1-bio:hover, .bg-text-2-bio:hover {
  background-color: $box-3-color; /* Cambia colore al passaggio del mouse */
}

.text-container {
  transition: transform 0.3s ease; 
}

.text-container:hover {
  transform: translateX(10px); 
}
</style>



