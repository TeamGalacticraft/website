import axios from "axios";

const getNavItems = async (): Promise<void> => {
  let flattenedData;

  axios.get("http://localhost:1337/api/navs?populate=*").then((res) => {
    flattenedData = res.data.data[0].attributes;
    flattenedData.logo = flattenedData.logo.data.attributes.url;
  });

  return flattenedData;
};

export { getNavItems };
