import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (categoria) => {

        const [images, setimages] = useState([])
        const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(categoria);
        setimages(newImages);
        setIsloading(false);
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
