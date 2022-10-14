import axios from "axios";

export const getNavItems = async (): Promise<void> => {
  let flattenedData;

  axios.get(`${process.env.API_URL}/api/navs?populate=*`).then((res) => {
    flattenedData = res.data.data[0].attributes;
    flattenedData.logo = flattenedData.logo.data.attributes.url;
  });

  return flattenedData;
};
