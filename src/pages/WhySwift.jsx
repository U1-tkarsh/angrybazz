import React, { useState, useEffect } from "react";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { makeStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedTwoToneIcon from "@material-ui/icons/RadioButtonUncheckedTwoTone";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

const useStyles = makeStyles((theme) => ({
  circularButton: {
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

function WhySwifts() {
  const [visibleParas, setVisibleParas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [visibleTest, setVisibleTest] = useState([]);
  const classes = useStyles();

  const paras = [
    {
      id: "1",
      para: "Lorem ipfdsfssum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur sit mollitia quaerat, impedit provident veniam sequi! Blanditiis eos aut fuga molestiae, architecto enim modi adipisci repellendus consequuntur doloremque quis?",
    },
    {
      id: "2",
      para: "Swift is easier to read. It is also easy to maintain because programmers need not put effort into bookkeeping.. The Swift run-time crash will stop on the line of code where a nil optional variable has been used, preventing errors in codes. Thus, swift is a safe programming language.",
    },
    {
      id: "3",
      para: "Swift being one of the leading firm in the market and with quality working environment. Being in Mahendra's will be an amazing opportunity to learn, grow and explore yourself and above all Mahendra's would be like an ocean of endless learning experience of the most latest technologies and practices",
    },
    {
      id: "4",
      para: "Lorem ipjkljlkjlksum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur sit mollitia quaerat, impedit provident veniam sequi! Blanditiis eos aut fuga molestiae, architecto enim modi adipisci repellendus consequuntur doloremque quis?",
    }
  ];

  const Testimonials = [
    {
      link: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam quidem exercitationem, ut porro velit at esse, possimus temporibus atque error eos cupiditate quos ad corrupti dolore sint, quasi pariatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis error reiciendis ab consectetur? Sed tenetur repudiandae maiores blanditiis incidunt hic, placeat assumenda provident, non quam debitis in minus tempora ad! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis voluptatibus mollitia nulla, enim, placeat, corporis quaerat fuga laboriosam veritatis similique numquam nostrum nesciunt eligendi. Placeat alias architecto unde fugit!",
    },
    {
      link: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Loremghghjghghjghuiyuiuuiyiu ipsumtjytuytu dolor sit amet consectetur adipisicing elit. Excepturi totam quidem exercitationem, ut porro velit at esse, possimus temporibus atque error eos cupiditate quos ad corrupti dolore sint, quasi pariatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis error reiciendis ab consectetur? Sed tenetur repudiandae maiores blanditiis incidunt hic, placeat assumenda provident, non quam debitis in minus tempora ad! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis voluptatibus mollitia nulla, enim, placeat, corporis quaerat fuga laboriosam veritatis similique numquam nostrum nesciunt eligendi. Placeat alias architecto unde fugit!",
    },
    {
      link: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
      desc: "Loremuuyiuyiuyiu ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam quidem exercitationem, ut porro velit at esse, possimus temporibus atque error eos cupiditate quos ad corrupti dolore sint, quasi pariatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis error reiciendis ab consectetur? Sed tenetur repudiandae maiores blanditiis incidunt hic, placeat assumenda provident, non quam debitis in minus tempora ad! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis voluptatibus mollitia nulla, enim, placeat, corporis quaerat fuga laboriosam veritatis similique numquam nostrum nesciunt eligendi. Placeat alias architecto unde fugit!",
    },
    {
      link: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
      desc: "Loremuykjh ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam quidem exercitationem, ut porro velit at esse, possimus temporibus atque error eos cupiditate quos ad corrupti dolore sint, quasi pariatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis error reiciendis ab consectetur? Sed tenetur repudiandae maiores blanditiis incidunt hic, placeat assumenda provident, non quam debitis in minus tempora ad! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis voluptatibus mollitia nulla, enim, placeat, corporis quaerat fuga laboriosam veritatis similique numquam nostrum nesciunt eligendi. Placeat alias architecto unde fugit!",
    },
  ];

  const yourCarouselData = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
  ];

  const nextTest = () => {
    const nextIndex = (testIndex + 1) % Testimonials.length;
    const nextVisibleTestimonials = Testimonials.slice(
      nextIndex,
      nextIndex + 1
    );
    setTestIndex(nextIndex);
    setVisibleTest(nextVisibleTestimonials);
  };

  const prevTest = () => {
    const nextIndex = (testIndex - 1) % Testimonials.length;
    const nextVisibleTestimonials = Testimonials.slice(
      nextIndex,
      nextIndex + 1
    );
    setTestIndex(nextIndex);
    setVisibleTest(nextVisibleTestimonials);
  };

  const renderCarouselIcons = () => {
    return yourCarouselData.map((item, index) => (
      <div key={index} className="mx-2">
        {testIndex === index ? (
          <FiberManualRecordTwoToneIcon
            className={`${classes.circularButton}text-primary`}
          />
        ) : (
          <RadioButtonUncheckedTwoToneIcon
            className={`${classes.circularButton} text-gray-500`}
          />
        )}
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTest();
    }, 3000);

    return () => clearInterval(interval);
  }, [testIndex, Testimonials]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % paras.length;
      const nextVisibleParas = paras.slice(nextIndex, nextIndex + 1);
      setCurrentIndex(nextIndex);
      setVisibleParas(nextVisibleParas);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, paras]);

  return (
    <div>
      {/* Home / why swify transport */}
      <div className="max-w-4xl lg:max-w-8xl text-white bg-blue-900 lg:bg-gray-300 lg:p-10 relative">
        <div className="p-2">Home / Why Swift Transport</div>
        <div className=" bg-blue-900 rounded-2xl  pb-28 relative">
          <div className="text-white px-16 pt-10 font-bold text-2xl underline">
            Why Swift Transport
          </div>
          <div className="text-white px-16 text-xl font-bold p-5 ">
            Here from our loyal customers about why{" "}
            <pre>they're happy to recommend us to you.</pre>
          </div>

          <div className="text-white px-16 pb-14 p-5">
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <pre>
              the majority have suffered alteration in some form, by injected{" "}
            </pre>{" "}
            <pre>
              humour, or randomised words which don,t look even slightly
            </pre>{" "}
            <pre>
              believable. If you are going to use a passage of Lorem Ipsum, you
              nedd
            </pre>{" "}
            <pre>
              to be sure there isn,t anything embarassing hidden in the middle
              of{" "}
            </pre>{" "}
            text.
          </div>

          <div className="absolute bg-gray-400 bottom-8 left-16 py-4 px-16 rounded-2xl text-blue-900 font-bold">
            Learn More
          </div>
        </div>
        <div className="bg-red-600 w-36 h-36 ml-10 lg:ml-0 lg:w-80 lg:h-52 absolute top-12 lg:top-28 lg:right-28"></div>
        <div className="bg-red-600 w-80 h-52 absolute bottom-20 right-28"></div>
      </div>

      {/* Why Swift */}
      <div className="bg-red-900 px-8 py-14 relative max-w-8xl">
        <div className="bg-white w-1/2">
          <div className="text-blue-900 pt-14 pb-4 px-10 font-bold text-2xl">
            Why Swift
          </div>
          <div>
            {visibleParas.map((para) => (
              <div className="px-10 py-6" key={para.id}>
                {para.para}
              </div>
            ))}
            <div className="mx-10 py-6 flex justify-center">{renderCarouselIcons()}</div>
          </div>
        </div>
        <div className="absolute h-full w-1/2 pl-20 pt-14 bottom-6 right-20">
          <img
            src="https://media.istockphoto.com/id/466104101/photo/fast-transport.webp?b=1&s=170667a&w=0&k=20&c=mZd-UTgnDVDTfFdL8aFRCdUc3Z7TUMHwqeypbBdBy7I="
            alt=""
            srcset=""
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-8xl mt-5 pb-12 bg-blue-900">
        <div className="text-white py-4 px-20">Case Studies</div>
        <div className="bg-white text-center w-full">
          <div className="grid grid-cols-3 p-10 gap-6 w-full">
            <div className="mx-10">
              <img
                className="w-80 rounded-xl h-36"
                src="data:image/png;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div className="mx-10">
              <img
                className="rounded-xl"
                src="data:image/jpeg;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div className="mx-10">
              <img
                className="rounded-xl"
                src="data:image/jpeg;base64,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"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-8xl ">
        <div className="text-blue-900 px-24 py-5 text-2xl font-bold">
          Testimonials
        </div>
        <div className="flex p-10">
          <button
            onClick={prevTest}
            className={`hover:bg-gray-200 ${classes.circularButton}`}
          >
            <SkipPreviousIcon fontSize="large" />
          </button>
          {visibleTest.map((test) => (
            <div className="flex">
              <div className="w-full h-full">
                <img className="w-64 h-56" src={test.link} alt="" srcset="" />
              </div>
              ,<div className="pl-12">{test.desc}</div>
            </div>
          ))}
          <button
            onClick={nextTest}
            className={`hover:bg-gray-200 ${classes.circularButton}`}
          >
            <SkipNextIcon fontSize="large" />
          </button>
        </div>
        <div className="mx-10 flex justify-center">{renderCarouselIcons()}</div>
      </div>

      <div className="bg-white max-w-8xl grid grid-cols-3  p-20 lg:grid-cols-5">
        <div className="text-center">
          <HeadsetMicOutlinedIcon fontSize="large" />
          <div>
            Call us at anytime on <pre>1210 779 434</pre>
          </div>
        </div>
        <div className="text-center">
          <EmailOutlinedIcon fontSize="large" />
          <div>
            See why more <pre>companies prefer</pre> Swift
          </div>
        </div>
        <div className="text-center">
          <ThumbUpAltOutlinedIcon fontSize="large" />
          <div>
            Email the Team at <pre>Swift Transport</pre> Courier Divison
          </div>
        </div>
        <div className="text-center">
          <EmojiTransportationIcon fontSize="large" />
          <div>
            Email the Team at <pre>Swift Containers</pre> Transport Divison
          </div>
        </div>
        <div className="text-center font-light">
          <AllInboxOutlinedIcon fontSize="large" />
          <div>
            Visit our <pre> warehousing and</pre> distributed center
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySwifts;
