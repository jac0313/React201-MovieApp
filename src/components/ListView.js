import Hero from './Hero'
import {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const ListView = () => {
  const [movies, setMovies] = useState([])
  const [newMovieTitle, setNewMovieTitle] = useState('')
  const [updatedMovieTitle, setUpdatedMovieTitle] = useState('')
  const MOCKAPI_URL ='https://650b79e4dfd73d1fab0a02b6.mockapi.io/movieList'
  

  useEffect(() => {
    getMovies()
  }, [])
// function to get movies from database and display
  function getMovies() {
    fetch(MOCKAPI_URL)
      .then((data) => data.json())
      .then((data) => {
        setMovies(data)
        console.log(data)
      })
  }
// function to delete movie from the db
  function deleteMovie(id) {
    fetch(MOCKAPI_URL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getMovies())
  }
// function to add new movie to the list
  function postNewMovie(e) {
    e.preventDefault()
    fetch(MOCKAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movieTitle: newMovieTitle,
      }),
    }).then(() => getMovies())
  }
// function to update item on the list
  function updateMovie(e, movieObject) {
    e.preventDefault()
  
    let updatedMovieObject = {
      ...movieObject,
      movieTitle: updatedMovieTitle,
    }

    fetch(`${MOCKAPI_URL}/${movieObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovieObject),
    }).then(() => getMovies())
  }

  // creates new input form and displays movie list with delete and update buttons
  return (
    <>
    <Hero text= "My Must Watch Movie List"/>  
    <div className="form-floating mt-5 mb-3">
      <input onChange= {(e)=>setNewMovieTitle(e.target.value)} 
              type="text" className="form-control" 
              id="floatingInput" placeholder="Movie Title">
      </input>
      <label for="floatingInput">Add New Movie Title</label>
    </div>

  <button type="button" className="btn btn-dark text-center" 
    onClick={(e)=>postNewMovie(e)}>Submit</button>



   

    <div className="App">
      {/* {movies.map((movie, index) => ( */}
        <div className="container mt-2" >
          <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Movie Title</th> 
                  <th>Edit</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>{
                movies.map((movie, index)=>{
                  return(
                <tr key={index}>
                  <td>{index}</td>
                  <td>{movie.movieTitle}</td>
                  <td> 
                    <form>
                        <label>Update Title:</label>
                        <input 
                          onChange={(e) => setUpdatedMovieTitle(e.target.value)}
                        ></input>
                        <button className='btn btn-outline-info m-2 btn-sm' onClick={(e) => updateMovie(e, movie)}>Update</button>   
                    </form>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => deleteMovie(movie.id)}>Delete</button>
                  </td>
                  <td>
                        <Form>
                            {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                  type={type}
                                  id={`default-${type}`}
                                  label= "watched?"
                                />
                                </div>
                            ))}
                       </Form>
                  </td>
                </tr>
                )})
              }
               
              </tbody>
            </Table>
          </div>
        {/* ))
      } */}
        </div>
        </>
        )}

         


  export default ListView