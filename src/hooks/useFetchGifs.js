import { getGifs } from '../helpers/getGif';
import { useEffect, useState } from 'react';

export const useFetchGifs = (category) => {

    const [images, setImage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then( e => setImage(e));
        setLoading(false);
      }, []);
    
    return{
        images,
        isLoading: loading
    }
}
