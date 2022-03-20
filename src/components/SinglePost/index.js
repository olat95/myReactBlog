import React from 'react'
import '../../style/style.css'
import IOB from '../../images/iob.jpg'
import {
  Container,
  SPAuthor,
  SPDate,
  SPDesc,
  SPEdit,
  SPImg,
  SPInfo,
  SPTitle,
  SPWrapper,
} from './SPElement'

const SinglePost = () => {
  return (
    <Container>
      <SPWrapper>
        <SPImg src={IOB} alt='' />
        <SPTitle>
          Internet of Behaviors (IoB)
          <SPEdit>
            <i class='SPIcon fa-solid fa-pen-to-square'></i>
            <i class='SPIcon fa-solid fa-trash-arrow-up'></i>
          </SPEdit>
        </SPTitle>
        <SPInfo>
          <SPAuthor>
            Author: <b>oluwapelumi</b>
          </SPAuthor>
          <SPDate>1 hour ago</SPDate>
        </SPInfo>
        <SPDesc>
          A lot of customer data is collected by service providers through IoT
          devices in the home. Businesses are using analytics and big data
          techniques to determine the data's value in what is now known as the
          Internet of Behaviors (IoB). By reviewing this customer information,
          businesses can personalize their services, market their products, and
          improve a customer's experience with the company. While personalized
          solutions are important, companies face an uphill battle convincing
          users to share personal data with them to develop these solutions.
          Website hacking and other cybersecurity challenges also make customers
          uncomfortable about risking their privacy in return for valuable
          services. A different approach to data collection will be vital for
          businesses' data analysis needs.
        </SPDesc>
      </SPWrapper>
    </Container>
  )
}

export default SinglePost
