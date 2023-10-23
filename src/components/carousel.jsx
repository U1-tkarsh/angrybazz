import { Carousel, Typography, Button } from "@material-tailwind/react";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";

export default function CarouselWithContent() {
  const slides = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJ1Y2t8ZW58MHx8MHx8fDA%3D",
        title: "The Power of Swift International",
      description:
        "OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN'T. YOU'LL BE PLEASANTLY SURPRISED",
      callText: "Call Us",
      phoneNumber: "1300 779 438",
      why: "WHY SWIFT TRANSPORT",
      fleet: "FLEET",
      policy: "COMPANY POLICIES",
      about: "ABOUT US",
      contact: "CONTACT US",
      swift: "Swift International",
      container: "Container Transport Solutions",
      complete: "Complete Warehousing Solutions",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "The Power of Swift International",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanates from old trees, that so wonderfully changes and renews a weary spirit.",
      callText: "Call Us",
      phoneNumber: "1300 779 438",
      why: "WHY SWIFT TRANSPORT",
      fleet: "FLEET",
      policy: "COMPANY POLICIES",
      about: "ABOUT US",
      contact: "CONTACT US",
      swift: "Swift International",
      container: "Container Transport Solutions",
      complete: "Complete Warehousing Solutions",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRydWNrfGVufDB8fDB8fHww",
      title: "The Power of Swift International",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanates from old trees, that so wonderfully changes and renews a weary spirit.",
      callText: "Call Us",
      phoneNumber: "1300 779 438",
      why: "WHY SWIFT TRANSPORT",
      fleet: "FLEET",
      policy: "COMPANY POLICIES",
      about: "ABOUT US",
      contact: "CONTACT US",
      swift: "Swift International",
      container: "Container Transport Solutions",
      complete: "Complete Warehousing Solutions",
    },
  ];

  return (
    <Carousel className="rounded-xl">
      {slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={slide.imageSrc}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute hidden lg:block top-10 right-5 md:right-20 font-bold lg:right-20 text-white">
            <div className="flex gap-3 text-white text-xl">
              <PhoneInTalkOutlinedIcon
                style={{ marginRight: "12", color: "white", fontSize: "32" }}
              />
              {slide.callText}
            </div>
            <div className="text-white text-xl">{slide.phoneNumber}</div>
          </div>

          <div className="absolute hidden lg:block top-32 right-5 md:right-20 font-bold lg:right-20 text-white">
            <div className="flex gap-8 text-white text-xl">
              <div>{slide.why}</div>
              <div className="font-bold text-xl underline">{slide.fleet}</div>
              <div>{slide.policy}</div>
              <div>{slide.about}</div>
              <div>{slide.contact}</div>
            </div>
          </div>

          <div className="absolute hidden lg:block top-48 right-5 md:right-20 font-bold lg:right-20 text-white">
            <div className="flex gap-6  text-2xl">
              <div className="bg-red-900">{slide.swift}</div>
              <div>{slide.container}</div>
              <div>{slide.complete}</div>
            </div>
          </div>

          <div className="absolute inset-0 grid h-full w-full place-items-end bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pb-36 md:pb-20 lg:pb-96 lg:mr-40">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 hidden lg:block opacity-80"
              >
                {slide.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
