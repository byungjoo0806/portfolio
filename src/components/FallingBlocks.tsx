import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { sketch } from '../hooks/sketch';

const containerStyle: React.CSSProperties = {
    position: 'fixed', // Or 'absolute' if more appropriate for your layout
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // This sends the canvas to the back
};

const FallingBlocks: React.FC = () => {
    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let myP5: p5;

        if (sketchRef.current) {
            myP5 = new p5(sketch, sketchRef.current);
        }

        return () => {
            myP5.remove(); // This cleans up the canvas when the component unmounts
        };
    }, []);

    return <div ref={sketchRef} style={containerStyle}></div>;
};

export default FallingBlocks;
