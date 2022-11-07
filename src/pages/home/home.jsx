
import { axiosClient, tmdbList } from "../../api/axios";

import { HomeEl, Container } from "./home.styles";
import HeroSlide from "../../components/heroslide/heroslide";
import MovieList from "../../components/movie-list/movielist"
import SwiperActors from "../../components/swiper-actor/swiper-actor";
import { useEffect, useState } from "react";

const Home = () => {

  const useGetActors = () => {
    const [list, setList] = useState(Array)
    useEffect(() => {
      axiosClient.get("/trending/person/day")
      .then(res => setList(res.results))
      .catch(() => console.error('cant catch data'))
    },[])
    return list
  }
  const actors = useGetActors()

  return (
    <HomeEl>
      <HeroSlide />
      <Container>
 
            <SwiperActors actors={actors} > trending </SwiperActors>
            <MovieList
              category={tmdbList.category.tv}
              type={tmdbList.tv.popular}
            />
            <MovieList
              category={tmdbList.category.movie}
              type={tmdbList.movie.popular}
            />
            <MovieList
              category={tmdbList.category.tv}
              type={tmdbList.tv.top_rated}
            />
            <MovieList
              category={tmdbList.category.movie}
              type={tmdbList.movie.top_rated}
            />
      </Container>
    </HomeEl>
  );
};

export default Home;
