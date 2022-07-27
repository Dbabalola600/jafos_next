import DefaultLayout from "../../components/layout/DefaultLayout";
import Header from "../../components/layout/Header";
import type { NextPageWithLayout } from ".././_app";
import type { ReactElement } from "react";
import TextInputFields from "../../components/shared/input/TextInput";
import Link from "next/link";
import Head from "next/head";
import LoggedLayout from "../../components/layout/LoggedLayout";


const About: NextPageWithLayout = () => {
    return (
        <form

        className="w-full py-20 space-y-16  text-black text-base md:text-xl"
    >

  <div>
    stand 1
  </div>
      

      <div>
        stand 2

        <div>
          insert carousel 
        </div>
      </div>


      <div>
        stand 3
      </div>

      <div>
        stand 4
      </div>


      

        
        
    </form>
    )
  }
  
  About.getLayout = function getLayout(page: ReactElement) {
    return (
      <LoggedLayout>
       <>
      
       <Header
       title="Welcome User"
       desc=" please provide necessary details for sign in"/>
       {page}
      
       </> 
      </LoggedLayout>
    )
  }

export default About;
