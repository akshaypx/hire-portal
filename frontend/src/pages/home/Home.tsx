import JobCard from "@/components/jobCard/JobCard";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCo",
    location: "San Francisco, USA",
    exp: 3,
    salLow: 100000,
    salHigh: 120000,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataAnalytics Inc.",
    location: "New York City, USA",
    exp: 2,
    salLow: 90000,
    salHigh: 110000,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignSolutions",
    location: "London, UK",
    exp: 4,
    salLow: 80000,
    salHigh: 100000,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 4,
    title: "Quality Assurance",
    company: "Testify",
    location: "Toronto, Canada",
    exp: 1,
    salLow: 60000,
    salHigh: 70000,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 5,
    title: "Project Manager",
    company: "ProjectPros",
    location: "Berlin, Germany",
    exp: 5,
    salLow: 110000,
    salHigh: 130000,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
];

const Home = () => {
  return (
    <div className="max-w-[1200px] w-full max-h-fit flex">
      <div className="w-1/4 p-4 pl-0">
        <Card className="p-2 flex flex-col">
          <div className="flex justify-between">
            <p>Filters</p>
            <Button className="text-sm" size={"sm"}>
              Reset
            </Button>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Salary Range</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Card>
      </div>
      <div className="w-3/4 flex flex-wrap gap-3 py-4">
        {mockData.map((data, idx) => (
          <JobCard data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home;
