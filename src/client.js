// import  SanityClient  from "@sanity/client";
// import  ImageUrlBuilder  from "@sanity/image-url";

// export const client = SanityClient({
//     projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: process.env.REACT_APP_SANITY_TOKEN,
// })

// const builder = ImageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)


import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "0um9c3r6",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skIzP0dGCy6FtvNqAwcaTqwuOuryjMSSBdXeXkLTavprxiZsjK6ztQhhJBxKuPUzsRp7ogWAhqH4U44ZI7m0zM5IIrP3gOQbngs7yeScl3G0x1h4K53vR7jbJLKD5hXrKN2Z1jeaIBKKeXW3h8ZnfKAzOydSJtbilBYR7CMiHYYvq3xSVAib",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);