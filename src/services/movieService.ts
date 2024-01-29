import { exampleClient } from '~/core/network-client'

export interface MoviesDataResponse {
  Response: string
  Search: {
    Title: string
    Director: string
    Year: string
    Poster: string
    imdbID: string
  }[]
  totalResults: string
}

export const getMoviesData = (keyword: string) =>
  exampleClient.get<MoviesDataResponse>('', { s: keyword })

export interface ConcreteMovieDataResponse {
  Title: string
  Plot: string
  Director: string
  Year: string
  Poster: string
  imdbID: string
}
export const getConcreteMovieData = (id: string) =>
  exampleClient.get<ConcreteMovieDataResponse>('', { i: id, plot: 'full' })
