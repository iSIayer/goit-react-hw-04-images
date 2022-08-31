import { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';

import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import { Container } from './Container.styled';
import { fetchImages, isLastPages } from 'services/api';
import { Modal } from './Modal';

export function App() {
  const isMount = useRef(false);

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (isMount.current) {
      fetchNewImgs(query, page);
    }
    isMount.current = true;
  }, [page, query]);

  useEffect(() => {
    showModalNewWindow(showModal);
  }, [showModal, images]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
    setShowModal(document.documentElement.showModal);
  };

  const handleQuery = query => {
    setQuery(prevQuery => {
      if (prevQuery !== query) {
        setPage(1);
        setImages([]);
        setError('');
        setShowModal(0);
        return query;
      }
    });
  };

  const fetchNewImgs = async (query = '', page = 1) => {
    try {
      setIsLoading(true);

      const respImages = await fetchImages(query, page);

      if (respImages.length === 0 || respImages.length === '') {
        throw new Error(`No results were found for ${query}...`);
      }

      const newImages = respImages.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );

      setImages(prevImages => [...prevImages, ...newImages]);
      setIsLastPage(isLastPages());
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  const closeModal = () => {
    setLargeImageURL('');
  };

  const showModalNewWindow = showModal => {
    window.scrollBy(showModal, 150);
  };

  return (
    <>
      <Container>
        <SearchBar handleQuery={handleQuery} />
        {error !== '' && <p className="message">{error}</p>}
        {error === '' && <ImageGallery imgs={images} openModal={openModal} />}
        {isLoading && <Loader />}
        {!isLoading &&
          error === '' &&
          (isLastPage ? (
            <p className="no-images">No more content</p>
          ) : (
            images.length !== 0 && <Button handleClick={handleLoadMore} />
          ))}
        {largeImageURL && (
          <Modal
            onClose={closeModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    </>
  );
}
