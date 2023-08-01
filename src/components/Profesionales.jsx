import Card from "./Card/Cards";

function Profesionales(){
    return(
        <section className="team">
             <div className="team-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Team</h2>
                        <hr/>
                        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                    </div>
                    <div class="row people">
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg"
                        />
                    </div>
                </div>
             </div>
        </section>
    )
}

export default Profesionales