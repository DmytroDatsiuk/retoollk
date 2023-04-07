import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { ContactCounter } from 'components/ContactCounter/ContactCounter';
import { Section, Title, Wrapper } from './ContactsBar.styled';

export const ContactsBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Contacts</Title>
        <ContactCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
