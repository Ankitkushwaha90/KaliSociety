import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import Portabtext from './lib/sanityPortableText'

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}
 const Recipe = [
  {
    title: "hello",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
  {
    title: "hello1",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
  {
    title: "hello2",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
  {
    title: "hello3",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
  {
    title: "hello3",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
  {
    title: "hello3",
    image: "image data",
    time: 23,
    description: "hello data of image and it is description",
    vegan: true,
    id: "nameofid"
  },
];

export default async function Home() {
  return (
    <>
      <main>
        <div className="grid grid-cols-3 gap-8 px-32 py-20 ">
          {Recipe.map((Recipe) => (
            <Card key={Recipe.id} className="hover:shadow-md bgcolor hover:shadow-gray-700">
            <CardHeader>
              <CardTitle>{Recipe.title}</CardTitle>
              <CardDescription>{Recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{Recipe.vegan}</p>
            </CardContent>
            <CardFooter>
              <p>{Recipe.time}</p>
            </CardFooter>
          </Card>
          ))}
        </div>
        {/* <Portabtext/> */}
      </main>
    </>
  );
}
