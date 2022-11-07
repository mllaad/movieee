import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {getGenreList} from './features/tmdb/tmdb'
import Main from './layouts/main';
import Home from './pages/home/home';
import Movie from './pages/movie/movie';
import Serie from './pages/serie/serie';
import Search from './pages/search/search'
import InGrid from './routes/ingrid/ingrid';
import DetailPage from './pages/detail-page/detail-page';
import DetailPerson from './pages/detail-person/detail-person';

import NotFound from './pages/notfound/notfound';
import { Container } from './App.style'
import {useParams, useLocation} from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  dispatch(getGenreList())
  const {pathname} = useLocation()
  return (
        <Container>
          <Routes>
            <Route path='/' element={<Main/>}>
              <Route index element={<Home/>}/>
              <Route path='/movie' element={<Movie/>}/>
              <Route path='/tv' element={<Serie/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='/grid-template/*' element={<InGrid/>}/>
              <Route path='/detail/:category/:id' element={ <DetailPage key={pathname} />} />
              <Route path='/person/:id' element={<DetailPerson/>} />
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
        </Container>
  );
}
export default App;
