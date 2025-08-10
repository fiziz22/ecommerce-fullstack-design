import React from 'react';

const services = [
  {
    title: 'Source from Industry Hubs',
    image: '/images/industry.jpg',
    icon: '🔍',
  },
  {
    title: 'Customize Your Products',
    image: '/images/customize.jpg',
    icon: '📦',
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    image: '/images/shipping.jpg',
    icon: '✈️',
  },
  {
    title: 'Product monitoring and inspection',
    image: '/images/inspection.jpg',
    icon: '🛡️',
  },
];

const ExtraServices = () => {
  return (
    <section className="px-4 py-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-md shadow overflow-hidden">
            <img src="service.png" alt={service.title} className="w-full h-40 object-cover" />
            {/* Icon between image and text */}
            <div className="flex justify-end px-4 -mt-5">
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full text-lg shadow">
                {service.icon}
              </div>
            </div>
            <div className="p-4 pt-2">
              <p className="text-sm font-medium text-gray-800">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraServices;
