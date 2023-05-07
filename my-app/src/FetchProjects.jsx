import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "8zn005tzovo7",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const items = res.items.map((item) => {
        const { url, title, image } = item.fields;
        const { id } = item.sys.id;
        const img = image?.fields?.file?.url;
        // const { url: image } = item.fields.image;
        return { title, url, img, id };
      });
      setProjects(items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

// client.getEntries({ content_type: "projects" }).then((res) => console.log(res.items));

// space id-8zn005tzovo7

// access token-tDgnMk4mhNwcywQL7On2pJsZVev_8aUT-05avFQuAWc
