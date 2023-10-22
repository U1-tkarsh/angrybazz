import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import NewsData from "../components/NewsData";
import { Link } from 'react-router-dom';

export function CardDefault() {

  return (
    <div className="p-6">
      {/* why swift */}
      <div className="max-w-8xl relative">
        <img
          className="w-full h-96"
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRydWNrfGVufDB8fDB8fHww"
          alt=""
          srcset=""
        />
        <div className="absolute top-8 left-10 w-80 bg-blue-900">
          <div className="text-white font-bold text-xl py-4 px-5">
            A fleet capable of much more than you,d think
          </div>

          <div className="text-white font-light px-5 pb-20">
            With a diverse range of utes, trucks and semi-trailors, Swift
            Transport is capable of much more than you,d think. Combine our
            versatile fleet with our industyr leading technology and 'can-do'
            attitude for a winning logistics partenrship with your organization.
          </div>
        </div>
        <div className="text-white absolute bottom-8 left-52 underline font-bold text-xl py-4 px-5 cursor-pointer" >
        <Link to="/why-swift">Why Swift</Link>
        </div>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>

      <NewsData />

      {/* contact us page */}
      <div className="max-w-8xl relative rounded-lg mt-6">
        <img
          className=" rounded-2xl w-full"
          src="https://media.istockphoto.com/id/1008681532/photo/male-operator-staff-with-team-working-call-center.webp?b=1&s=170667a&w=0&k=20&c=5LQos9_NJ6D3jfljGF3DaoabxGuNrH3wmu47HHAJK6c="
          alt=""
          srcset=""
        />
        <div className="bg-blue-900 pb-14 pt-3 absolute top-10 w-80 text-white text-center">
          Have a question regarding <pre>Swift services?</pre>
          <div className="font-bold absolute left-48 top-16">
            Contact Us <span>&#8594;</span>
          </div>
        </div>
      </div>

      {/* you will be in a good company */}
      <div className="bg-red-400 relative max-w-8xl mt-6">
        <div className="text-white absolute top-4 left-16 text-2xl  font-bold ">
          You,ll be in a good Company
        </div>
        <div className="relative rounded-lg flex p-9">
          <img
            className="mr-4 rounded-xl w-2/4 p-8"
            src="https://plus.unsplash.com/premium_photo-1682144419578-c499757ed7a0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RlZWwlMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            srcset=""
          />
          <div className=" bg-white w-1/2 grid grid-cols-2 p-4 gap-4">
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kennard Hire case Study */}
      <div className="max-w-8xl relative rounded-lg mt-6">
        <img
          className=" rounded-2xl w-full h-96"
          src="https://media.istockphoto.com/id/1130261613/photo/loaded-european-truck-on-motorway-in-sunset.webp?b=1&s=170667a&w=0&k=20&c=ATZKi1mIS_C9JOFFPej7mG44wgssazwwcSChTjt-Mhw="
          alt=""
          srcset=""
        />
        <div>
          <div className="absolute top-10 right-28 text-lg font-bold text-blue-900">
            We deliver, no matter <pre>how hard the challenge</pre>
          </div>
          <img
            className="absolute top-32 right-11"
            src="data:image/jpeg;base64,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7RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k="
            alt=""
            srcset=""
          />
          <div className="text-white underline font-bold absolute top-80 right-20 text-xl">
            Kennards Hire Case Study
          </div>
        </div>
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
