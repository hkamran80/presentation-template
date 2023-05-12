/* eslint-disable react/jsx-key */
import SlidePage from "@/components/SlidePage";
import { slideConfiguration, slides } from "@/slides/configuration";
import { type NextPage } from "next";

const Home: NextPage = () => <SlidePage slides={slides} {...slideConfiguration} />;

export default Home;
