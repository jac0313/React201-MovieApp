import Hero from "./Hero";
import { Link } from 'react-router-dom';
import no_image from '/Users/amelia/Desktop/React201-MovieApp/src/no_image'

const MovieCard = ({ movie }) => {
  let posterUrl;
  if (movie.poster_path === null){
    posterUrl = no_image
  } else {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }
//sets image for when no movie poster is available, below shows poster and title from search with button for more details

  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card text-center">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}


const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })
//maps through search result data and displays in cards, conditionals for if movie isn't found with text in hero
  if (searchResults.length === 0) {
    return (
      <div>
        <Hero text={title} />
        {resultsHtml &&
          <div className="container">
            <div className="row text-center">
              <p className="display-6 mt-5">
                Oops, it seems we couldn't find any matches.
              </p>
            </div>
          </div>
        }
      </div>
    );
  } else {

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};
}

export default SearchView;