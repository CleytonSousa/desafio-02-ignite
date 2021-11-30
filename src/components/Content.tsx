import React from "react"
import { MovieCard } from "./MovieCard"

export function Content(props: any) {
  // Complete aqui

  const movies = props.movie


  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie: { imdbID: React.Key | null | undefined; Title: string; Poster: string; Runtime: string; Ratings: { Value: string }[] })  => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}