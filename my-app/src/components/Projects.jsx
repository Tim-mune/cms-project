import { useFetchProjects } from "../FetchProjects";
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);
  if (loading) {
    return (
      <section className="projects">
        <h2>loading...</h2>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((project) => {
            const { id, img, url, title } = project;
            return (
              <a
                key={id}
                className="img"
                href={url}
                rel="noreferrer"
                target="_blank"
              >
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
