"use client"
import { getBlog } from "@/sanity/sanity-utils";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  params: { slug: string }
}

async function Webdesign({ params }: Props){
  const page = await getBlog(params.slug);
  console.log(page);
  console.log("hello wrong");

  return(
    <>
     <div className="mx-auto max-w-4xl  space-y-8  pt-20  lg:py-8 ">
        <h1 className="text-xl font-bold text-[#79869c] dark:text-[white]">
          {page.title}
        </h1>
        <p className="text-[#79869c]">
          {page.code} 
        </p>
        <div className="my-8">
          {/* {page.myCodeField} */}
          <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
              <a
                href="#"
                className="mb-4 text-2xl font-bold text-[white] sm:mb-0"
              >
                Your Logo
              </a>
              <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className=" max-lg:mx-3">
          <div className="max-h-[500px]  max-w-3xl min-w-[16rem] rounded-md overflow-y-scroll">
            {/* <div className="sticky top-0 flex justify-between px-4 dark:bg-slate-950 bg-gray-300 text-[#79869c] dark:text-[#79869c] text-xs items-center">
              <p className="text-sm">Example code</p>

              {copy ? (
                <button className="py-1 inline-flex items-center gap-1">
                  <span className="text-base mt-1">
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                  Copied!
                </button>
              ) : (
                <button
                  className="py-1 inline-flex items-center gap-1"
                  onClick={() => {
                    navigator.clipboard.writeText(codeString);
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                  }}
                >
                  <span className="text-base mt-1">
                    <ion-icon name="clipboard"></ion-icon>
                  </span>
                  Copy code
                </button>
              )}
            </div> */}

            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: "20px",
              }}
              wrapLongLines={true}
            >
              {page.code}
              {/* {codeString} */}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}

async function Webdesign1(){
  return(
    <>
      <h1>getWebdesign1</h1>
    </>
  )
}

async function Webdesign2(){
  return(
    <>
      <h1>getWebdesign1</h1>
    </>
  )
}

async function Webdesign3(){
  return(
    <>
      <h1>getWebdesign1</h1>
    </>
  )
}

async function Webdesign4(){
  return(
    <>
      <h1>getWebdesign</h1>
    </>
  )
}

async function Webdesign5(){
  return(
    <>
      <h1>getWebdesign</h1>
    </>
  )
}





export default async function Page({ params }: Props) {
  const page = await getBlog(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-10">
  
          <h1>{page.title5}</h1>
          <Webdesign params={params}/>
        
      </div>
    </div>
  )
}

