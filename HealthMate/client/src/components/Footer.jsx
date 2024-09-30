import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import HealthMate from '../assets/images/HealthMate.png'
import {BsFacebook, BsGithub, BsInstagram, BsTwitterX} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <div className="flex card">
          <img src={HealthMate} alt="" srcset="" className="w-16 ml-3"/>
          <h2 className="hidden lg:block mt-1">HealthMate</h2>
        </div> 
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="mr-5">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HealthMate 
                </Footer.Link>
                {/* <Footer.Link
                  href="https://kirankk1.github.io/TodoApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Todo App
                </Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/kirankumarporla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/kirankk1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright href="#" by="HealthMate" year={new Date().getFullYear()} />
             <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="https://github.com/praniiyadav" icon={BsGithub} />
                <Footer.Icon href="" icon={BsTwitterX} />
             </div>
        </div>
      </div>
    </Footer>
  );
}
