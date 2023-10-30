import styled from "styled-components";
import {BackBtn} from "../components/GeneralComponents.jsx";
import {IoChevronBack} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  height: 90vh;
  position: relative;
  @media (max-width: 1040px) {
    margin-top: 3.2rem;
  }
`;
const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.4rem;
  margin-bottom: 2rem;
  @media (max-width: 550px) {
    width: 90%;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const H1 = styled.h1`
  font-size: 2.6rem;
  margin-top: 2rem;
  color: var(--color-grey-3);
`;
const H2 = styled.h2`
  color: var(--color-grey-3);
  font-size: 1.8rem;
`;
const P = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-2);
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: disc;
  margin-left: 1.6rem;
`;
const Li = styled.li`
  
  color: var(--color-grey-4);
  & strong {
    color: var(--color-grey-3);
  }
`;


export default function AboutUs() {
  document.title ='About Us';

  const {isDarkMode} = useSelector(state => state.general);

  return (
    <AboutUsContainer>
      <InnerContainer>
        <H1>About Us</H1>
        <P>Welcome to GALAD</P>
        <P>At GALAd, we are passionate about books and reading. Our platform was created with the goal of helping book
          enthusiasts like you discover, organize, and engage with your favorite reads. Whether you're an avid reader, a
          casual book lover, or just getting started on your literary journey, we're here to provide you with a
          personalized and enjoyable experience.</P>
        <StyledDiv>
          <H2>Out Mission</H2>
          <P>Our mission is to make your reading experience more enjoyable and interactive. We believe that books have the
            power to inspire, educate, and entertain, and we're dedicated to creating a space where you can connect with
            fellow bookworms, explore new titles, and share your thoughts and recommendations.</P>
        </StyledDiv>
        <StyledDiv>
          <H2>What We Offer</H2>
          <UL>
            <Li isdark={`${isDarkMode}`}>
              <strong>Discover New Books:</strong> Search and explore an extensive collection of books from various genres,
              authors, and publishers using the Google Book API.
            </Li>
            <Li isdark={`${isDarkMode}`}>
              <strong>Create Your Reading List:</strong> Build your personal reading list by adding books you want to read
              in the future.
            </Li>
            <Li isdark={`${isDarkMode}`}>
              <strong>Customize Your Profile:</strong> Personalize your profile by adding your name, last name, phone
              number, gender, birthday, and country. You can also upload a profile picture to make your presence on our
              platform unique.
            </Li>
            <Li isdark={`${isDarkMode}`}>
              <strong>Privacy and Security:</strong> We prioritize the security and privacy of your personal information.
              You can trust us to handle your data with care.
            </Li>
            <Li isdark={`${isDarkMode}`}>
              <strong>Account Management:</strong> Manage your account settings, including the ability to delete your
              account or log out whenever you choose.
            </Li>
          </UL>
        </StyledDiv>
        <StyledDiv>
          <H2>Get Started</H2>
          <P>Ready to embark on a literary adventure with us? Join our community of book lovers by creating an account
            today. It's easy, free, and opens the door to a world of literary exploration.</P>
          <P>If you have any questions, suggestions, or feedback, feel free to reach out to us. We value your input and
            are here to make your experience on [Your Website Name] as enjoyable as possible.</P>
          <P>Thank you for choosing [Your Website Name] as your reading companion. Happy reading!</P>
        </StyledDiv>
      </InnerContainer>
    </AboutUsContainer>
  )
}