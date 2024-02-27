import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  BadgeCheck,
  Bookmark,
  Briefcase,
  CircleDollarSign,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  exp: number;
  salLow: number;
  salHigh: number;
  img: string;
}

interface JobCardProps {
  data: Job;
}

const JobCard = ({ data }: JobCardProps) => {
  return (
    <Card className="w-[290px] h-fit hover:shadow-lg transition">
      <CardHeader className="p-2">
        <div className="flex text-lg justify-between gap-2">
          <div className="object-cover overflow-hidden h-12 w-12 flex justify-center items-center">
            <img
              src={data.img}
              alt=""
              height={30}
              width={30}
              className="w-10 h-10"
            />
          </div>
          <div className="flex-1 flex flex-col gap-0">
            <div className="flex pb-0 justify-between">
              <h4 className="font-bold text-md">
                {data.title.length > 14
                  ? data.title.substring(0, 14) + ".."
                  : data.title}
              </h4>
              <Badge
                variant="outline"
                className="text-[8px] h-fit w-10 flex p-0 m-0 font-bold justify-center"
              >
                Job Ads
              </Badge>
            </div>
            <p className="flex justify-start items-center gap-1 text-muted-foreground font-bold text-xs">
              {data.company} <BadgeCheck size={15} />
            </p>
          </div>
          <Bookmark />
        </div>
        <CardDescription>
          <p className="flex justify-start items-center py-1 gap-1">
            <MapPin size={15} />
            {data.location}
          </p>
          <div>
            <p className="flex justify-start items-center py-1 gap-1 ">
              <Briefcase size={15} /> {data.exp} years
            </p>
            <p className="flex justify-start items-center py-1 gap-1">
              <CircleDollarSign size={15} /> ${data.salLow}k - ${data.salHigh}k
            </p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default JobCard;
