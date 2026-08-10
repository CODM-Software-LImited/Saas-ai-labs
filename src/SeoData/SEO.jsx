import { Helmet } from "react-helmet";
 

function SEO({ title, description, url, image , keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image}/>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="author" content="CODM Software Limited" />
    </Helmet>
  );
}
 
export default SEO;


// import { Helmet } from "react-helmet-async";

// function SEO({ title, description, url, image , keywords }) {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <link rel="canonical" href={url} />
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1"/>
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:url" content={url} />
//       <meta property="og:image" content={image}/>
//       <meta name="twitter:card" content="summary_large_image" />
      
//     </Helmet>
//   );
// }

// export default SEO;