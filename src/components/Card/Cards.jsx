function Card (props){
    const { name, occupation, imageSrc } = props;
    return(
        <div className="col-md-6 col-lg-4 item">
        <div className="box">
          <img className="rounded-circle" src={imageSrc} alt={name} />
          <h3 className="name">{name}</h3>
          <p className="title">{occupation}</p>
        </div>
      </div>
    )
}

export default Card