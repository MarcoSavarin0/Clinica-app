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
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                        <Card 
                        name="Mauro Lombardo"
                        occupation="Rapero"
                        imageSrc= "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg"
                        />
                    </div>
                </div>
             </div>
        </section>
    )
}

export default Profesionales