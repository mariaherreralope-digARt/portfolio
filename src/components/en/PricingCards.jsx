import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "One-Time Payment, No Client Edits",
    clientType:
      "Ideal for: Very small businesses that rarely update their site.",
    price: "300 - 600",
    currency: "EUR",
    frequency: "One-Time Payment",
    deliveryTime: "1 week",
    description:
      "This is for clients who don’t need to make changes themselves. You send me updates via WhatsApp or email. I take care of everything for you.",
    features: [
      "Custom-designed 1-page website",
      "Mobile responsive",
      "Basic animations (Framer Motion)",
      "Fast loading & SEO basics",
      "Hosting setup (Netlify/Vercel)",
      "EUR 30–50 per small future update on request.",
    ],
    cta: "Start your trial",
    mostPopular: "Tier 1",
  },
  {
    title: "Client Can Edit Content",
    clientType: "Ideal for: Clients who want to update text/images themselves.",
    price: "600 - 1000",
    currency: "EUR",
    frequency: "One-Time Payment",
    deliveryTime: "10 days",
    description:
      "You’ll get a private login to a user-friendly dashboard where you can change your site text, add photos, or publish new blog posts — no coding needed.",
    features: [
      "Everything in Tier 1",
      "Admin dashboard (Strapi or Sanity)",
      "CMS training & documentation",
      "Blog or dynamic pages",
      "Hosting CMS + site",
      "Optional: EUR 10–20/month for support & updates.",
    ],
    cta: "Start your trial",
    mostPopular: "Tier 2",
  },
  {
    title: "Full Support + Maintenance",
    clientType:
      "This is the VIP plan. You focus on your business, I handle the tech. You get edits, backups, and full support — no worries.",
    price: "1000+",
    currency: "EUR",
    frequency: "One-Time Payment",
    deliveryTime: "10 days",
    description:
      "This is the VIP plan. You focus on your business, I handle the tech. You get edits, backups, and full support — no worries.",
    features: [
      "Everything in Tier 2",
      "Monthly updates (2–3 small edits)",
      "Analytics/reporting setup",
      "Priority support",
      "Hosting & backups managed",
      "Then: EUR 30–50/month maintenance package",
    ],
    cta: "Start your trial",
    mostPopular: "Tier 3",
  },
];

const PricingCards = () => {
  return (
    <div id="services"
      className=" mx-auto max-w-7xl
    pt-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0c0c1d] to-[#111132]"
    >
      <h2 className="text-md font-extrabold text-slate-100 sm:text-xl sm:leading-tight sm:tracking-tight text-center">
        Flexible Website Packages — Built for Your Business, Your Way
      </h2>
      <p className="mt-2  text-center text-sm text-slate-300">
        Whether you just need a simple one-page site or a fully managed online
        presence, choose the plan that matches your goals and budget. No hidden
        fees, no tech stress.
      </p>
      {/* Cards */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-8 py-5 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="relative rounded-2xl border border-emerald-400 bg-gradient-to-b from-slate-100/40 via-transparent to-slate-100/40 p-8 text-emerald-400 shadow-lg"
          >
            <h3 className="text-md font-semibold leading-5">{plan.title}</h3>

            <p
              key={plan.mostPopular}
              className="absolute top-0 -translate-y-1/2 rounded-full bg-yellow-300 px-3 py-0.5 text-sm font-semibold tracking-wide text-slate-500 shadow-md"
            >
              {plan.mostPopular}
            </p>

            <p className="mt-4 text-sm leading-4 text-slate-300">
              {plan.description}
            </p>
            <div className=" mt-4 rounded-lg bg-slate-50/40 p-3">
              <p className="flex items-center text-xs font-semibold text-emerald-400">
                <span>{plan.currency}</span>
                <span className="ml-3 text-lg text-slate-300">
                  {plan.price}
                </span>
                <span className="ml-1.5">/ {plan.frequency}</span>
              </p>
            </div>
            {/* Features */}
            <ul className="mt-6 space-y-1">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm leading-6 text-slate-200">
                  ✅<span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
