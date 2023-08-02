import React, { useState, useEffect } from "react";
function Home(){
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-us");
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          aboutSection.classList.add("appear");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Puedes ajustar este valor dependiendo de cuándo quieres que aparezca cada bloque de servicio.
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const serviceBlocks = document.querySelectorAll(".servicios .row .col-md-6");
    serviceBlocks.forEach((block) => observer.observe(block));

    return () => {
      observer.disconnect();
    };
  }, []);
    return(
        <main> 
     
      
        <section className="carrousel-cont">  
          <div className="welcome-text">
            <h1 >Clinica Hematologica Santa Fe</h1>
          </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://th.bing.com/th/id/R.475e5fe114f84e39c2df2d2b771a3f35?rik=aWi9UEqPWXALBA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fWater-Clouds-Nature-Rivers-HD-Wallpaper-1920x1080.jpg&ehk=S2QOEKpU%2fGEJFvLS9HHHwibPhsOGHzlyGHgfrP%2brqo4%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th/id/OIP.tLDR8Trr-9Jfp9iUwefN5gHaEK?pid=ImgDet&rs=1" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1920x1080.png?text=Proyecto+3" class="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
      </section>
    
      <section className="about-us">
        <h3 className="h3-about-us">¿Quiénes somos?</h3>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur sagittis sapien, non cursus felis convallis vitae. Maecenas iaculis mauris a nibh gravida, id commodo mauris pellentesque.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dignissimos ea dolore quibusdam quae itaque fugit. Natus nisi maxime totam! Corporis dolore asperiores ipsam quod sequi sed dolorem inventore quibusdam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id recusandae cupiditate aperiam, fugiat blanditiis quod qui nam, porro reiciendis ut ipsa suscipit consectetur non ducimus, ab tempore laudantium? Quis!
              </p>
            </div>
            <div className="col-md-6 order-md-last imagen">
            </div>
          </div>
        </div>
      </section>
      <section className="servicios">
        <h3 >Nuestros servicios</h3>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h4 className="h4-service text-center">Servicio 1</h4>
              <p className="textoTurno">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia. Sed, unde nobis. Ratione sed ipsa, excepturi, nihil nobis tempora dolorum cupiditate corporis ea similique velit odit sit natus illum?
              </p>
            </div>
            <div className="col-md-6 order-md-first imagen">
            </div>
          </div>
       
          <div className="row">
            <div className="col-md-6">
            <h4 className="h4-service text-center">Servicio 2</h4>
              <p className="textoTurno">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam incidunt quae reiciendis et autem culpa exercitationem laborum atque pariatur, commodi esse officiis expedita illo sunt! Nostrum reiciendis accusamus architecto!
              </p>
            </div>
            <div className="col-md-6 order-md-last imagen2">
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
            <h4 className="h4-service text-center">Servicio 3</h4>
              <p className="textoTurno">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia. Sed, unde nobis. Ratione sed ipsa, excepturi, nihil nobis tempora dolorum cupiditate corporis ea similique velit odit sit natus illum?
              </p>
            </div>
            <div className="col-md-6 order-md-first imagen3">
            </div>
          </div>
        </div>
      </section>
    
    <section className="turnos efecto">
      
      <h3>Horarios de Atencion</h3>
      <hr/>
      <div className="container contHorarios">
        <div className="row">
          <div className="">
          <p className="horarios">
              <i className="fa-regular fa-calendar"></i>
              <strong className="days">LUNES A VIERNES</strong> 
              <br />
              <i className="fa-regular fa-clock fa-fade"></i>
              08hs hasta las 22hs
              <br />
              <strong className="days">SABADO Y DOMINGO</strong> 
              <br />
            Solo guardias
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="preguntasFrecuentes">
      <h3 className="h3-about-us">Preguntas Frecuentes</h3>
      <hr></hr>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
    </section>
    
    </main>
    )
}
export default Home