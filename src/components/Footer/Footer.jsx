function Footer(){
    const estiloMapa = {
        width: "100%",
        height: "450px",
        border: "0",
        
    }
    return(
    <>
    <a href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO" class="whatsapp-button" target="_blank">
    <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
  </a>
    
<footer>
    <section className="google-map">
        
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7090614134518!2d-60.69910582374648!3d-31.641815374158625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9bf3143aa7b%3A0xb187c92f2541dda5!2sCH%20Hematolog%C3%ADa!5e0!3m2!1ses-419!2sar!4v1684886857438!5m2!1ses-419!2sar" style={estiloMapa} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </section> 
      <div className="infomation-footer">
        <p><i className="fa-solid fa-location-dot"></i>Santa Fe, Argentina</p>
        <p><i className="fa-solid fa-envelope"></i>clinica@gmail.com</p>
        <p><i className="fa-solid fa-phone-volume"></i>+54 2314 3131 44</p>
      </div>
      <p className="created"> <strong>©2023 por Clinica Hematologica(CH)</strong>  todos los derechos reservados</p>
      <p className="created" >Created by <a href="https://marcosavarin0.github.io/" target="_blank">MarcoSavarino</a></p>
</footer>
</>
    )
}

export default Footer