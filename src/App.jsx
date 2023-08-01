import React from 'react'
import { useState } from 'react'

import { InfoModalComponent } from './lib'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModalClick = () => {
    setIsModalOpen(true)
  }

  return (
    <main>
      <button
        onClick={() => {
          handleOpenModalClick()
        }}
      >
        Open
      </button>
      {isModalOpen ? (
        <InfoModalComponent
          setIsModalOpen={setIsModalOpen}
          title={'Hello World'}
          information={'Welcome !!!'}
          modalBg={
            'radial-gradient(circle, rgba(255, 246, 235, 1) 0%, rgba(255, 228, 196, 1) 70%)'
          }
          TitleTextAlign={'center'}
          TitleTextColor={'#00bc77'}
          InformationTextAlign={'center'}
          InformationTextColor={'#257b5a'}
          ValidationBtnBgColor={'transparent'}
          ValidationBtnColor={'#257b5a'}
        />
      ) : null}
    </main>
  )
}

export default App
