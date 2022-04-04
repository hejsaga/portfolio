const transformData = (data) => {
  let attributes = data.projects.data.map((project) => {
    return {
      id: project.id,
      number: project.attributes.number,
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

  let projects = attributes.sort((a, b) => {
    return a.number - b.number;
  });

  return projects;
};

export default transformData;
