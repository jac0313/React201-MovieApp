import Hero from './Hero'
import background from '/Users/amelia/Desktop/React201-MovieApp/src/small-theater.jpg'


const Home = () => {
    return(
    <>  
      <Hero text="Welcome to my Final Project"/>  
      <main>
      <div className="backdrop" style={{ backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
    }}>
        {/* sets background image on homeview */}
      <div className= "container-fluid">
            <div className="row">
                <div className="col-lg-8-offset-lg-2 my-5">
                <p className="lead text-white text-center">
                    This is a movie browser website for movie lovers. And if you're like me, you constantly have a mental list of movies to watch. This site also includes a must watch list that can be updated so you never forget what you wanted to watch when you finally have some free time. Enjoy!
                </p>
                </div>
            </div>
        </div>
        </div>
    </main>
    </>
    )
  }
  export default Home