import Header from "../components/header";
import Hero from "../components/hero";
import HeroModern from "../components/hero.modern";
import Services from "../components/services";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Tools from "../components/tools";
import Testimonials from "../components/testimonials";
import Faqs from "../components/faqs";

export async function getServerSideProps(context) {
  var userResponse = await fetch("http://localhost:2021/api/user");
  var user = await userResponse.json();

  var reposResponse = await fetch("http://localhost:2021/api/repos");
  var repos = (await reposResponse.json()) || [];
  console.log({ ...repos });

  return {
    props: {
      user,
      repos,
    },
  };
}

function PortfolioHomePage({ user, repos }) {
  return (
    <div className="w-screen min-h-screen flex flex-col relative bg-gray-50 overflow-hidden">
      {/* header */}
      <Header />

      <main className="wrapper">
        {/* hero */}
        <Hero user={user} />

        <Projects projects={repos} />
      </main>
    </div>
  );
}

export default PortfolioHomePage;
