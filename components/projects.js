function Projects({ projects }) {
  return (
    <section
      className="projects-section w-screen max-w-6xl mx-auto h-full"
      id="works"
    >
      <h2 className="section-header text-3xl">Projects</h2>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 mt-8">
        {projects.map((item) => (
          <div
            className="flex flex-col bg-gray-100 p-4 rounded-xl w-full h-96"
            key={item.id}
          >
            <p className="">{item.name}</p>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
