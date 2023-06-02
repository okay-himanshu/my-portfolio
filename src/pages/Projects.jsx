import React from "react";
import ProjectCards from "../components/ProjectCard";
import TopHeading from "../components/TopHeading";
import projectGoogle from "../assets/google.png";
import projectYoutube from "../assets/youtube.png";
import projectNewsVerse from "../assets/newsverse.png";
import projectMovie from "../assets/movie.png";

const Projects = () => {
  return (
    <>
      <TopHeading title="Projects" />
      <main className="mt-5 flex  justify-center">
        <div className="flex flex-col max-w-6xl ">
          <ProjectCards
            title={"btn"}
            poster={projectYoutube}
            paragraph={
              "Designed and developed a YouTube clone using React.js, mimicking the core functionalities of the popular video-sharing platform. Implemented features such as video playback, search, and recommendations. Demonstrated proficiency in React.js and showcased ability to create dynamic and interactive web applications."
            }
          />
          <ProjectCards
            title={"Visit Site"}
            poster={projectGoogle}
            paragraph={
              "Created a Google search engine clone using React.js, replicating core functionalities like search suggestions and result pagination. Demonstrated proficiency in React.js and problem-solving skills in web development, showcasing creativity and coding abilities."
            }
          />
          <ProjectCards
            title={"btn"}
            poster={projectNewsVerse}
            paragraph={
              "Created Newsverse, a news app built using React.js. Implemented features like real-time news updates, personalized news categories, and saved articles. Demonstrated expertise in React.js, API integration, and responsive design. Showcased ability to develop user-friendly and informative web applications for seamless news browsing."
            }
          />
          <ProjectCards
            title={"btn"}
            poster={projectMovie}
            paragraph={
              "Developed a movie search app using React.js, enabling users to search for movies, view details, and manage favorites. Utilized React's components and state management to create a user-friendly and responsive interface. Demonstrated proficiency in React.js and ability to develop functional and interactive web applications."
            }
          />
        </div>
      </main>
    </>
  );
};

export default Projects;
