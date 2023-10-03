// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

// import Header from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Footer from "@/components/Footer";

interface Props {
  productData: ProductProps
}

export default function Home({productData}: Props) {
  //console.log(productData);
  return (
    <main>
      {/* <h1>This is the store</h1> */}
     {/* <Header />
     <BottomHeader /> */}
     {/* <div className="py-10 bg-gray-300">
        This is the home page
     </div> */}
     <div className="max-w-screen-3xl mx-auto">
      <Banner />
      {/* <Products productData = {productData} /> */}
      <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20, mb-10">
      <Products productData = {productData} />
      </div>
      
     </div>
     {/* <Footer /> */}

    </main>
  )
}


//Server side Rendering for data fetching
/*
If you export a function called getServerSideProps (Server-Side Rendering) 
from a page, Next.js will pre-render this page on each request using the data 
returned by getServerSideProps.
Note that irrespective of rendering type, any props will be passed to the 
page component and can be viewed on the client-side in the initial HTML. 
This is to allow the page to be hydrated correctly. 
Make sure that you don't pass any sensitive information that shouldn't 
be available on the client in props.
*/

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData =  await res.json();
  return {
    props:{ productData}
  };
};