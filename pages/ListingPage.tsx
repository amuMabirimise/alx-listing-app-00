import React from "react";
import Layout from "../components/layout/Layout";
import { PROPERTYLISTINGSAMPLE } from "../constants";

const ListingPage = () => {
  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Available Properties</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.name}</h3>
                <p className="text-sm text-gray-600">{`${property.address.city}, ${property.address.state}, ${property.address.country}`}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Price:</span> $
                  {property.price} / night
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Rating:</span>{" "}
                  {property.rating}
                </p>
                <div className="mt-2 flex gap-2 text-sm">
                  {property.category.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ListingPage;
