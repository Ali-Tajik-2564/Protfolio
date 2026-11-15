import AboutMe from '../components/AboutMe/AboutMe';
import ContactMe from '../components/ContactMe/ContactMe';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import MyProjects from '../components/MyProjects/MyProjects';
import MySkills from '../components/MySkills/MySkills';

export default function Home() {
  return (
    <div
      className="w-full m-0 p-0 flex flex-col justify-start bg-(--charcoal-medium)"
      style={{ fontFamily: 'var(--Aonic)' }}>
      <Header />
      <Landing />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
