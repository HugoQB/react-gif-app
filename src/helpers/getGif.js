export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/stickers/search?api_key=NZO3L2pY1tsyGGPGbKCYPRlokZIO1FN1&q=${category}&limit=15`;
    const res = await fetch( url );
    const { data } = await res.json(); 
  
    const gifs =  data.map( img => (
  
      {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
  
      }
  
    ));
    return gifs;
  }