import { BadgePoundSterling } from "lucide-react";
<<<<<<< HEAD
import Button from "./button";
// import bgImage from "../assets/portfolio-bg.png";    

=======
>>>>>>> fixed-forgotpassword-page
export default function featuresSection() {
  const features = [
    {
      icon: <BadgePoundSterling className="text-indigo-600 " size={20}  />,
      title: "Enhance Budget Precision",
      description:
        "Kreatorpay helps you track and manage expenses accurately while simplifying budgeting goals for creators.",
<<<<<<< HEAD
      buttonText: "Get Started",
=======
>>>>>>> fixed-forgotpassword-page
    },
    {
      title: "Streamlined Monitoring",
      description:
        "Easily monitor your earnings, expenses and financial insights in real-time with an intuitive dashboard.",
<<<<<<< HEAD
      buttonText: "Start Monitoring",
=======
>>>>>>> fixed-forgotpassword-page
    },
    {
      title: "AI Smart Advisor",
      description:
        "Leverage AI-driven recommendations to optimize your financial decisions and achieve better outcomes.",
<<<<<<< HEAD

      buttonText: "Meet Your Advisor",
=======
>>>>>>> fixed-forgotpassword-page
    },
  ];

  return (
    <section className="py-20 px-5 bg-white  max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50  rounded-2xl shadow-lg p-8 flex items-start "
          >
            <div className="p-2 bg-indigo-50 rounded-md mr-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
