const transformData = (data) => {
  let cases = data.cases.data.map((experience) => {
    return {
      id: experience.id,
      title: experience.attributes.title,
      description: experience.attributes.description,
      body: experience.attributes.body,
      image: experience.attributes.images.data.map((image) => {
        return image.attributes.url;
      }),
      tags: experience.attributes.tags.data.map((tag) => {
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
