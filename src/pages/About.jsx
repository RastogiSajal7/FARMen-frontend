import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="flex h-48 w-80 rounded-2xl m-4 shadow-lg overflow-hidden flex-col bg-amber-400"
    whileHover={{ scale: 1.1 }}
  >
    <div className="flex items-center justify-center h-2/3 bg-amber-400">
      <span className="text-xl font-semibold text-white p-4">{title}</span>
    </div>
    <div className="flex items-center justify-center text-center text-pretty bg-amber-200 p-2">
      <span className="p-2">{description}</span>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-10 px-4 py-8 bg-emerald-50 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-emerald-900">
          About FARMen
        </h1>
        <p className="text-gray-800 leading-relaxed mb-8">
          <strong>FARMen</strong> is a comprehensive web application designed to
          empower farmers by enabling them to sell their products directly to
          consumers. This project addresses the common issue of farmers
          receiving low profits due to the involvement of middlemen in the
          supply chain. By offering a platform for direct sales, FARMen helps
          farmers increase their profits and connect more closely with their
          customers.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-emerald-800">
          Key Features
        </h2>

        <div className="flex flex-wrap justify-evenly mb-8">
          {/* Existing Features */}
          <FeatureCard
            title="User Registration"
            description="Farmers and customers can easily register and create accounts on the platform."
          />

          <FeatureCard
            title="Product Listing"
            description="Farmers can list their products with detailed descriptions, prices, and images."
          />

          <FeatureCard
            title="Secure Payment Gateway"
            description="The platform ensures secure and seamless transactions, providing multiple payment options."
          />

          <FeatureCard
            title="Order Management"
            description="Farmers can manage orders, track sales, and communicate with customers efficiently."
          />

          <FeatureCard
            title="Responsive Design"
            description="The application is fully responsive, ensuring a smooth experience across all devices."
          />

          {/* New Features */}
            <FeatureCard
              title="Buy farming equipment!"
              description="Find a variety of farming tools and equipment."
            />

          <FeatureCard
            title="View latest Govt. Schemes"
            description="Explore current schemes and incentives for farmers."
          />

          <FeatureCard
            title="Know better farming techniques"
            description="Learn about advanced farming practices and methods."
          />

          <FeatureCard
            title="Latest agriculture news and updates"
            description="Stay updated with the latest trends and news in agriculture."
          />

          <FeatureCard
            title="Advertise your products"
            description="Promote your products to a wider audience."
          />

          <FeatureCard
            title="Share agriculture news and updates"
            description="Share news and updates with your network."
          />
        </div>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-emerald-800">
          Our Mission
        </h2>
        <p className="text-gray-800 leading-relaxed mb-8">
          At FARMen, our mission is to create a more equitable and transparent
          agricultural market. By reducing the dependence on middlemen, we aim
          to increase the profitability of farmers and provide fresh, quality
          produce to consumers. We believe in supporting sustainable agriculture
          and fostering a direct connection between farmers and their
          communities.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
