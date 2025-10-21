
import weddingImg from "../../assets/wedding.jpg"; // replace with your image path
import corporateImg from "../../assets/corporate.jpg"; // replace with your image path
import birthdayImg from "../../assets/birthday.jpg"; // replace with your image path

const services = [
  {
    title: "Wedding Event",
    description:
      "Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.",
    image: weddingImg,
  },
  {
    title: "Corporate Event",
    description:
      "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.",
    image: corporateImg,
  },
  {
    title: "Birthday Party",
    description:
      "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
    image: birthdayImg,
  },
];

const CateringServices = () => {
  return (
    <div className="py-16 px-4 md:px-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          WHAT WE DO
        </p>
        <h2 className="text-4xl font-serif font-bold mt-2">
          Premium catering services
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold border-b-2 border-orange-300 inline-block pb-1 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringServices;
