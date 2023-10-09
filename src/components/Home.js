import Hero from './Hero'
import background from '/Users/amelia/Desktop/React201-MovieApp/src/small-theater.jpg'


const Home = () => {
    return(
    <>  
      <Hero text="Welcome to my Final Project"/>  
      <main>
      <div className="backdrop m" style={{ backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
    }}>
      <div className= "container-fluid">
            <div className="row">
                <div className="col-lg-8-offset-lg-2 my-5">
                <p className="lead text-white text-center">
                    This is a movie browser site for people who love to watch movies and constantly make mental reminders to add that to the list of movies to watch. Here, you can make a Must Watch movie list so you'll never forget and search for more!
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