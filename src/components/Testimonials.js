import { useState } from "react";
import testimonials_logo from "../assets/testimonials_logo.svg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: testimonials_logo,
      heading: " Confiniti Testimonials.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
      author: "Francis Towne",
      designation: "Future  Technician",
    },
    {
      image: testimonials_logo,
      heading: " Testimonials.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
      author: "Francis Towne",
      designation: "Future Response Technician",
    },
    {
      image: testimonials_logo,
      heading: "Confiniti .",
      content:
        " sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
      author: "Francis Towne",
      designation: "Future Response Technician",
    },
    // Add more testimonials as needed
  ];

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    } else if (direction === "prev") {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  return (
    <div className="w-full relative bg-primary_purple text-white">
      <div className="lg:flex lg:p-8  ">
        <img
          src={testimonials[currentSlide].image}
          alt={`Testimonial ${currentSlide + 1}`}
          className="w-1/2 lg:w-1/2"
        />
        <div className="lg:w-1/2 p-4">
          <h2 className="text-6xl font-semibold mb-2 ">
            &#x275D; {testimonials[currentSlide].heading}
          </h2>
          <p className="text-xl mt-16">{testimonials[currentSlide].content}</p>
          <div className="mt-16">
            <p>{testimonials[currentSlide].author}</p>
            <p>{testimonials[currentSlide].designation}</p>
          </div>
          <div className="flex justify-center mt-4">
            {/* <button
              onClick={() => moveSlider("prev")}
              className="bg-white text-primary_purple py-2 px-4 rounded-full mr-4"
            >
              Previous
            </button> */}
            <button
              onClick={() => moveSlider("next")}
              className="bg-white text-primary_purple py-2 px-4 rounded-full "
            >
              Next {"  "} &#62;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
// import { useState } from "react";
// import testimonials_logo from "../assets/testimonials_logo.svg";
// import { CSSTransition } from "react-transition-group";
// import "../styles/testimonials.css"; // Create this CSS file for transition classes

// const Testimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       image: testimonials_logo,
//       heading: " Confiniti Testimonials.",
//       content:
//         "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
//       author: "Francis Towne",
//       designation: "Future  Technician",
//     },
//     {
//       image: testimonials_logo,
//       heading: " Testimonials.",
//       content:
//         "Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
//       author: "Francis Towne",
//       designation: "Future Response Technician",
//     },
//     {
//       image: testimonials_logo,
//       heading: "Confiniti .",
//       content:
//         " sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.",
//       author: "Francis Towne",
//       designation: "Future Response Technician",
//     },
//     // Add more testimonials as needed
//   ];

//   const moveSlider = (direction) => {
//     if (direction === "next") {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
//     } else if (direction === "prev") {
//       setCurrentSlide(
//         (prevSlide) =>
//           (prevSlide - 1 + testimonials.length) % testimonials.length
//       );
//     }
//   };

//   return (
//     <div className="w-full relative bg-primary_purple text-white">
//       <div className="lg:flex lg:p-8">
//         {testimonials.map((testimonial, index) => (
//           <CSSTransition
//             key={index}
//             in={index === currentSlide}
//             timeout={500}
//             classNames="fade"
//             unmountOnExit
//           >
//             <div className="testimonial lg:flex lg:p-8">
//               <img
//                 src={testimonial.image}
//                 alt={`Testimonial ${index + 1}`}
//                 className="w-1/2 lg:w-1/2"
//               />
//               <div className="lg:w-1/2 p-4">
//                 <h2 className="text-6xl font-semibold mb-2 ">
//                   &#x275D; {testimonial.heading}
//                 </h2>
//                 <p className="text-xl mt-16">{testimonial.content}</p>
//                 <div className="mt-16">
//                   <p>{testimonial.author}</p>
//                   <p>{testimonial.designation}</p>
//                 </div>
//               </div>
//             </div>
//           </CSSTransition>
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => moveSlider("next")}
//           className="bg-white text-primary_purple py-2 px-4 rounded-full"
//         >
//           Next {"  "} &#62;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
