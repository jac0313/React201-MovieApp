import Hero from './Hero'

const AboutView = () => {
    return(
    <>  
      <Hero text="About Me and my Project"/>  
      <div>
      <div className= "container">
            <div className="row">
                <div className="col-lg-8-offset-lg-2 my-5">
                <p className="lead">
                    I'm a front-end development student with Promineo Tech and this is my final project. I have utilized React JS with Bootstrap to create this site. I have used React Router to route between pages and created a search function with a movie detail page. I'd like to be able to add a "Must Watch" button to the movie detail cards to update a must watch list to create a CRUD application within this site. I'd also like to have the 'list' be detail cards with the movie details rather than the table that it is currently. I have created a 404 error page for routes that do not exist and an image for the movies in the search that do not have movie posters. There is also a message for when a search has no results.
                </p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }
  export default AboutView