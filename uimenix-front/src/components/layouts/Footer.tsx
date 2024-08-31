import fastDeliveryImg from "../../assets/images/fast-delivery.svg";
import CuratedItemsImg from "../../assets/images/curated-items.svg";
import HelpCenterImg from "../../assets/images/help-center.svg";
import SafePaymentImg from "../../assets/images/safe-payment.svg";
import OnlineDiscountImg from "../../assets/images/online-discount.svg";
import payment from "../../assets/images/payment.png";

const shopifySection = [
  {
    icon: fastDeliveryImg,
    title: "Fast Delivery",
    description: "Across West & East India",
  },
  {
    icon: SafePaymentImg,
    title: "Safe Payment",
    description: "100% Secure Payment",
  },
  {
    icon: OnlineDiscountImg,
    title: "Online Discount",
    description: "Add Multi-buy Discount",
  },
  {
    icon: HelpCenterImg,
    title: "Help Center",
    description: "Dedicated 24/7 Support",
  },
  {
    icon: CuratedItemsImg,
    title: "Curated Items",
    description: "From Handpicked Sellers",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-solid border-borderGray w-full px-4">
      {/* shopify-section */}
      <div className="py-6 flex flex-wrap justify-between items-center w-full">
        {shopifySection.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-4 w-full sm:w-1/2 lg:w-1/5 text-center mb-6 lg:mb-0"
          >
            <img
              src={section.icon}
              alt={section.title}
              className="w-[25px] object-cover"
            />
            <h3 className="text-[#212529] font-bold text-md sm:text-sm leading-6 pt-2 uppercase">
              {section.title}
            </h3>
            <p className="text-md sm:text-sm">{section.description}</p>
          </div>
        ))}
      </div>

      {/* divided line */}
      <div className="max-w-[1200px] mx-auto border-b border-solid border-borderGray" />

      {/* footer content */}
      <div className="py-9 flex flex-wrap lg:flex-nowrap justify-between items-start w-full">
        {/* left footer */}
        <div className="w-full lg:w-auto lg:flex-1 mb-3 lg:mb-0">
          <h3 className="font-bold uppercase">About The Store</h3>
          <div className="text-textPrimary">
            <p>Got Question? Call us 24/7</p>
            <span className="text-primary text-2xl font-bold leading-[1.8]">
              +222-1800-262
            </span>
            <p className="leading-[1.8]">
              268 St, South New York/NY 98944, United States
              <br />
              Customersupport@example.com <br /> Aloshopify@alothemes.com
            </p>
          </div>
        </div>

        {/* middle footer */}
        <div className="w-full lg:w-auto lg:flex-1 mb-3 lg:mb-0">
          <h3 className="font-bold uppercase">Information</h3>
          <p className="text-textPrimary leading-[1.8]">
            You have not selected the footer menu
          </p>
        </div>

        <div className="w-full lg:w-auto lg:flex-1 mb-3 lg:mb-0">
          <h3 className="font-bold uppercase">Quick Links</h3>
          <p className="text-textPrimary leading-[1.8]">
            You have not selected the footer menu
          </p>
        </div>

        {/* right footer */}
        <div className="w-full lg:w-auto lg:flex-1">
          <h3 className="font-bold uppercase">Newsletter Signup</h3>
          <div className="text-textPrimary">
            <p className="leading-[1.8]">
              Join 20,000+ subscribers and get a new discount coupon every
              Saturday. Updates information on Sales and Offers.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              <input
                type="text"
                placeholder="Your email address"
                className="border border-solid border-borderGray rounded-[50px] p-3 w-full md:flex-1 outline-none"
              />
              <button className="uppercase bg-primary rounded-[50px] font-bold text-sm py-4 cursor-pointer text-white px-5 hover:bg-black transition-all duration-200 mt-3 md:mt-0 md:flex-shrink-0">
                Subscribe
              </button>
            </div>
            <p className="mt-3">
              Subscribe for Uminex and get 20% off your first purchase.
            </p>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="py-9 w-full border-t border-solid border-borderGray flex flex-wrap lg:flex-nowrap items-center text-[18px] text-textPrimary mx-auto sm:justify-between">
        <div className="mb-6 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
          <p>
            Copyright © <span className="font-bold text-primary">Uminex</span>{" "}
            all rights reserved. Powered by{" "}
            <span className="font-bold text-primary">Alothemes</span>.
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <span className="mr-2">Payment Method:</span>
          <img src={payment} alt="Payment methods" />
        </div>
      </div>
    </footer>
  );
}
