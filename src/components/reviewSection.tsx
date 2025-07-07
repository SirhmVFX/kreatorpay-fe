"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Types for custom arrow props
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// Custom Next Arrow
function NextArrow(props: ArrowProps) {
<<<<<<< HEAD
// Custom Next Arrow
function NextArrow(props: any) {

=======
>>>>>>> fixed-forgotpassword-page
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full cursor-pointer z-10"
    >
      ❯
    </div>
  );
}

// Custom Prev Arrow
<<<<<<< HEAD

function PrevArrow(props: ArrowProps) {

function PrevArrow(props: any) {

=======
function PrevArrow(props: ArrowProps) {
>>>>>>> fixed-forgotpassword-page
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full cursor-pointer z-10"
    >
      ❮
    </div>
  );
}

export default function reviewSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Ella M.",
      feedback:
        "Kreatorpay made my budget management stress-free. I can now track income from multiple streams easily!",
    },
    {
      name: "Jay C.",
      feedback:
        "Love how it simplifies transactions for creators like me. The AI suggestions are a big win.",
    },
    {
      name: "Amaka D.",
      feedback:
        "Super intuitive dashboard and clear reports. Payments and expenses handled in minutes.",
    },
    {
      name: "Seyi V.",
      feedback:
        "Helped me unlock new earning opportunities with its financial insights — I’m hooked!",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-50  max-w-[1200px] mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Creators Say</h2>

        <div className="relative">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md mx-3 text-center"
              >
                <p className="text-gray-700 mb-4 italic">“{review.feedback}”</p>
                <h4 className="font-semibold text-indigo-600">{review.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
