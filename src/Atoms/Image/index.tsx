import React, { CSSProperties, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ImageAtomProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
  link: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  style = {},
  link,
}) => {
  const [isInView, setIsInView] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  // Use useEffect to set isInView to true when the image is in the viewport
  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    // <a href={`/${link}`}>
      <div>
        <div className="image-container">
          <img
            ref={ref}
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{
              borderRadius: "5px",
              marginBottom: "20px",
              ...style,
              opacity: isInView ? 1 : 0, // Set opacity when in view
              transition: "opacity 1s", // Slower fade-in transition (1 second)
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    // </a>
  );
};

export default ImageAtom;


// import React, { CSSProperties, useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// interface ImageAtomProps {
//   src: string;
//   alt: string;
//   width?: string;
//   height?: string;
//   style?: CSSProperties;
//   link: string;
// }

// const ImageAtom: React.FC<ImageAtomProps> = ({
//   src,
//   alt,
//   width = "100%",
//   height = "auto",
//   style = {},
//   link,
// }) => {


//   return (
//     <a href={`/${link}`}>
//       <div>
//         <div className="image-container">
//           <img
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//             style={{
//               borderRadius: "5px",
//               marginBottom: "20px",
//               ...style,
//             }}
//           />
//         </div>
//       </div>
//     </a>
//   );
// };

// export default ImageAtom;
