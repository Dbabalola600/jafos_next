import DefaultLayout from "../components/layout/DefaultLayout";
import Header from "../components/layout/Header";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import TextInputFields from "../components/shared/input/TextInput";
import Link from "next/link";

const CreateAccount: NextPageWithLayout = () => {
    return (
        <form
        autoSave={"off"}
        autoComplete={"off"}
            className="w-full py-20 space-y-16  text-black text-base md:text-xl"
        >


            <div className="grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-14 md:gap-y-28">

                {/* first name */}
                <div className="col-span-12  md:col-span-6 ">
                <TextInputFields
                    // errorMessage={errors.firstName?.message}
                    placeholder="First Name"
                    // registerName="fistName"
                    // register={register("firstName")}
                    type="text" 
                    name="First Name"
                    id="" 
                />
                </div>

                {/* lastname */}
                <div className="col-span-12  md:col-span-6 ">
                <TextInputFields
                    // errorMessage={errors.firstName?.message}
                    placeholder="Last Name"
                    // registerName="fistName"
                    // register={register("firstName")}
                    type="text" 
                    name="Last Name"
                    id="" 
                />
                </div>

                {/* email */}
                <div className="col-span-12  md:col-span-6 ">
                <TextInputFields
                    // errorMessage={errors.firstName?.message}
                    placeholder="Email"
                    // registerName="fistName"
                    // register={register("firstName")}
                    type="email" 
                    name="Email"
                    id="" 
                />
                </div>


                {/* matricNumber */}
                <div className="col-span-12  md:col-span-6 ">
                <TextInputFields
                    // errorMessage={errors.firstName?.message}
                    placeholder="Matric Number"
                    // registerName="fistName"
                    // register={register("firstName")}
                    type="number"
                     
                    name="Matric Number"
                    id="" 
                />
                </div>


                {/* password */}
                <div className="col-span-12  md:col-span-6 ">
                <TextInputFields
                    // errorMessage={errors.firstName?.message}
                    placeholder="Password"
                    // registerName="fistName"
                    // register={register("firstName")}
                    type="password" 
                    name="Password"
                    id="" 
                />
                </div>

            </div>


            <div className=" w-full  space-y-6">
                {/* <button className="btn1 w-full" type="submit" disabled={isButtonLoading}>
                  {isButtonLoading ? "Loading..." : "Proceed"}
              </button> */}
                <button className="w-full btn1">
                    Proceed
                </button>

                <h6 className="text-center md:text-xl w-full">
                    Already have an account?{" "}
                     <span className="text- hover:underline">
                      <Link href="/" >Login</Link>
                  </span> 
                </h6>
            </div>
        </form>
    )
  }
  
  CreateAccount.getLayout = function getLayout(page: ReactElement) {
    return (
      <DefaultLayout>
       <>
       <Header
       title="Create Account"
       desc=" please provide necessary details for account creation"/>
       {page}
      
       </> 
      </DefaultLayout>
    )
  }

export default CreateAccount;
