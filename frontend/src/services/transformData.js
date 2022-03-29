const transformData = (data) => {
  let projects = data.projects.data.map((project) => {
    return {
      id: project.id,
      title: project.attributes.title,
      description: project.attributes.description,
      body: project.attributes.body,
      image: project.attributes.image.data.attributes.url,
      tags: project.attributes.technologies.data.map((tag) => {
        return tag.attributes.title;
      }),
      roles: project.attributes.positions.data.map((pos) => {
        return pos.attributes.title;
      }),
    };
  });

  return projects;
};

export default transformData;
