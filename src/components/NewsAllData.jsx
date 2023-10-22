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
      <CardHeader floated={false}>
        <img src={newsPreviewImage} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography>{newsDescription.slice(0, 120)}</Typography>
      </CardBody>
      <CardFooter divider className="flex justify-center gap-7 pt-2">
        <Typography variant="small" className="capitalize">
          <span className="font-semibold">Category:</span> {newsCategory}
        </Typography>
      </CardFooter>
      <CardActions>
        <Button onClick={ReadMore} className="absolute left-80" size="large" color="secondary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsAllData;
