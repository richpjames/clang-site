<script>
import ImageSlide from "./Slide.svelte";

</script>

<ImageSlide>     
    <svelte:fragment slot="text-column">                                                                                                                                                                                         
        <h2 class="slide-title">Title</h2>                                                                                                                                                                                                        
        <div class="slide-blurb">                                                                                                                                                                                                 
            <p>We are a home for musicians to rehearse, record and hire equipment. Take a                                                                                                                                      
            look around our website and see what we do.                                                                                                                                                                     
            </p>                                                                                                                                                                                                              
            <p></p>                                                                                                                                                                                                           
        </div>
    </svelte:fragment>
    <img                                                                                                                                                                                                                
       src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F04a4c9f3-6560-47fd-bb1a-ff52b97c73a0_1.c139bc082ee544e784cd97ae05c79dc3.jpeg"
      alt="the studio"                                                                                                                                                                                                  
      class="slide-image"
      slot="image"                                                                                                                                                                                                
    />                                                                                                                                                                                                                  

</ImageSlide> 
