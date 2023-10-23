import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const NewsAllData = ({ data }) => {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } = data;

  const ReadMore= () => {
    {newsDescription}
  }
  return (
    <Card className="relative">
      <img className="rounded-2xl w-full" src={newsPreviewImage} alt="profile-picture" />

      <CardBody className="text-center p-4">
        <Typography variant="h5" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography className="hidden sm:block">{newsDescription.slice(0, 120)}</Typography>
      </CardBody>

      <CardFooter divider className="flex justify-between items-center p-4">
        <Typography variant="small" className="capitalize">
          <span className="font-semibold">Category:</span> {newsCategory}
        </Typography>
        <Button onClick={ReadMore} size="large" color="secondary">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsAllData;
