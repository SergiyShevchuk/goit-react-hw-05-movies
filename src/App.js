import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Navigation = lazy(() => import('./components/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews'));

function App() {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
