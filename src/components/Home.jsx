
function Home(){
    const style = {
        display: 'flex',
        justifyContent: 'center'
    }
    const medida = {
        width: "18rem;"
    }
    return(
        <main> 
     
      
        <section className="carrousel-cont">  
          <div className="welcome-text">
            <h1>Clinica Hematologica Santa Fe</h1>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur sagittis sapien, non cursus felis convallis vitae. Maecenas iaculis mauris a nibh gravida, id commodo mauris pellentesque.
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
        <h3>Nuestros servicios</h3>
        <hr/>
        <div className="container"> 
          <div className="row"> 
            <div className="col-md-4"> 
            <div className="card card1" style={medida}>
            <div className="card-body text-center">
              <div style={style}> 
                <i className="fa-solid fa-syringe fa-spin fa-spin-reverse"></i>
              </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className="card card2" style={medida}>
            <div className="card-body text-center">
              <div style={style}>
                <i className="fa-solid fa-vial-circle-check fa-spin fa-spin-reverse"></i>
              </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className="card card3" style={medida}>
            <div class="card-body text-center">
              <div style={style}>
                <i class="fa-solid fa-stethoscope fa-spin"></i>
              </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
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