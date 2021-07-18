import { useState, useEffect, useRef } from 'react'

import ImageGallery from './Components/ImageGallery/ImageGallery'
import SearchBar from './Components/SearchBar/SearchBar'
import Button from './Components/Button/Button'
import Modal from './Components/Modal/Modal'
import { fetchImages } from './services/api.js'

import Loader from 'react-loader-spinner'

function App() {
  const mounted = useRef(false)
  const [pictures, setPictures] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState(null)
  const [reqStatus, setReqStatus] = useState('idle')
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }

    async function render() {
      setReqStatus('pending')
      const images = await fetchImages(query, page)
      setPictures((prevState) => [...prevState, ...images])
      setReqStatus('resolved')

      if (page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      }
    }
    render()
  }, [query, page])

  const handleFormSubmit = (searchQuery) => {
    setQuery(searchQuery)
    setPage(1)
    setPictures([])
  }

  const pageIncrease = () => {
    setPage((s) => s + 1)
  }
  const openModal = (data) => {
    setShowModal(true)
    setModalImage(data)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalImage(null)
  }

  const showSearchButton = pictures.length > 0

  return (
    <div className="App">
      <SearchBar onSearch={handleFormSubmit}></SearchBar>
      <ImageGallery
        picturesData={pictures}
        toggleModal={openModal}
      ></ImageGallery>
      {reqStatus === 'pending' && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}

      {showSearchButton && <Button onClick={pageIncrease}></Button>}
      {showModal && <Modal onClose={closeModal} onOpen={modalImage}></Modal>}
    </div>
  )
}

export default App
