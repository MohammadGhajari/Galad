import {BsPersonGear} from "react-icons/bs";
import {MdSecurity} from "react-icons/md";
import {SlExclamation, SlQuestion} from "react-icons/sl";
import {NavSettings} from "../pages/Settings.jsx";
import styled from "styled-components";

const Container = styled.div`
  margin-top: ${props => props.martop};
`;
const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
const Label = styled.p`
  margin: 2.4rem 0 0.6rem 2.4rem;
  color: var(--color-grey-2);
`;

export default function SettingsSideBar ({martop, securityRef, aboutUsRef, askRef, personInfoRef }) {

  return (
    <Container martop={martop}>
      <Label>Settings</Label>
      <SettingsContainer>
        <NavSettings ref={personInfoRef} active={'true'} width={'80%'} to={'/settings/Personal-information'}><BsPersonGear/>Personal
          Information</NavSettings>
        <NavSettings ref={securityRef} active={'true'} width={'80%'} to={'/settings/security'}><MdSecurity/>Security</NavSettings>
      </SettingsContainer>
      <Label>Help</Label>
      <HelpContainer>
        <NavSettings ref={askRef} active={'true'} width={'80%'} to={'/settings/ask-question'}><SlQuestion/>Ask a
          Questions</NavSettings>
        <NavSettings ref={aboutUsRef} active={'true'} width={'80%'} to={'/settings/about'}><SlExclamation/>About Us</NavSettings>
      </HelpContainer>
    </Container>
  )
}