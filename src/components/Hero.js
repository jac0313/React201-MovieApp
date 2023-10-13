
const Hero = ({text, backdrop}) => {
    return(
        <header className="bg-dark text-white p-5 hero-container">
            <h1 className= "hero-text">{text}</h1>
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            
        </header>
    )//sets movie poster image as backdrop on hero of searchview page
}
export default Hero