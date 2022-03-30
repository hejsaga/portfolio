const transformData = (experiences) => {
  let cases = experiences.cases.data.map((experience) => {
    return {
      id: experience.id,
      title: experience.attributes.title,
      description: experience.attributes.description,
      body: experience.attributes.body,
      technologies: experience.attributes.technologies.data.map((tag) => {
        return tag.attributes.title;
      }),
      roles: experience.attributes.positions.data.map((pos) => {
        return pos.attributes.title;
      }),
    };
  });

  return cases;
};

export default transformData;
