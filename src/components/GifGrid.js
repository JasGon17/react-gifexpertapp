import React from 'react';
import { useFetchGifs } from '../hoooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//apy key
//0br5F2aohjiJgnhZZEJvXlI8x2FLKSv9

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    return(
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>loading...</p> }

            <div className='card-grid'>          
                {
                    images.map( img =>
                        <GifGridItem 
                            key={img.id }
                            {...img } />
                    )
                }
            </div>
        </>
    )
}