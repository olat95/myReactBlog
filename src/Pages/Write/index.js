import React from 'react'
import Writedefault from '../../images/write.jpg'
import '../../style/style.css'
import {
  Container,
  WFButton,
  WFWrapper,
  WriteForm,
  WriteImg,
  WriteInput,
  WriteInputt,
  WriteLabel,
  WriteTA,
} from './WriteElement'

const Write = () => {
  return (
    <Container>
      <WriteImg src={Writedefault} alt='' />
      <WriteForm>
        <WFWrapper>
          <WriteLabel htmlFor=''>
            <i className='writeIcon fa-solid fa-plus'></i>
          </WriteLabel>
          <WriteInput type='file' id='fileInput' />
          <WriteInputt
            type='text'
            placeholder='Title'
            id='fileTitle'
            autoFocus={true}
          />
        </WFWrapper>
        <WFWrapper>
          <WriteTA placeholder='Tell your story ...' type='text'></WriteTA>
        </WFWrapper>
        <WFButton>Publish</WFButton>
      </WriteForm>
    </Container>
  )
}

export default Write
