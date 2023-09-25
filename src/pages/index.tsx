// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Banner from "@/components/Banner";

// import Header from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* <h1>This is the store</h1> */}
     {/* <Header />
     <BottomHeader /> */}
     {/* <div className="py-10 bg-gray-300">
        This is the home page
     </div> */}
     <div className="max-w-screen-2xl mx-auto">
      <Banner />
     </div>
     {/* <Footer /> */}

    </main>
  )
}
