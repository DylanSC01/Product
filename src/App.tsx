import {
  Header,
  Hero,
  FeatureSection,
  EssentialAppsSection,
  ProductFeaturesSection,
  TestimonialsSection,
  CTASection,
  ProductNewsSection,
  Footer
} from "./components";

import {
  FEATURES,
  APP_CATEGORIES,
  ESSENTIAL_APPS,
  PRODUCT_FEATURES_SECTION,
  TESTIMONIALS,
  PRODUCT_NEWS,
} from "./data/data";

function App() {
  return (
    <>
      <Header />
      <Hero
        title={"A CRM dashboard for engineering teams"}
        subtitle={
          "Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur."
        }
        imageSrc={"/images/hero.webp"}
        imageAlt={"Dashboard demo image"}
        primaryButton={{ text: "Get a demo", link: "#", variant: "primary" }}
        secondaryButton={{
          text: "View Pricing",
          link: "#",
          variant: "outline",
        }}
      />

      <FeatureSection
        title={"Powerful features to help you manage all your leads"}
        description={
          "Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel."
        }
        features={FEATURES}
      />
      <EssentialAppsSection
        title={"Essential apps that protect your"}
        appsCategories={APP_CATEGORIES}
        essentialApps={ESSENTIAL_APPS}
        primaryButton={{ text: "Get Started", link: "#" }}
        secondaryButton={{
          text: "Browse all features",
          link: "#",
          variant: "outline",
        }}
      />
      <ProductFeaturesSection
        title={"Transparent, audited, &open source"}
        description={
          "Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum."
        }
        button={{ text: "Browse all features", link: "#", variant: "outline" }}
        imageUrl={"/images/code.webp"}
        imageAlt={"Image"}
        productsFeatures={PRODUCT_FEATURES_SECTION}
      />
      <TestimonialsSection
        title={"What our clients say"}
        description={
          "Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien."
        }
        testimonials={TESTIMONIALS}
      />
      <CTASection
        icon="/images/icons/discord.svg"
        title="Join the community"
        description="Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free."
        button={{
          text: "Join Discord",
          link: "#",
        }}
      />
      <ProductNewsSection
        title={"Product in the news"}
        button={{ text: "Browse all news", link: "#" }}
        products={PRODUCT_NEWS}
      />
      <Footer />
    </>
  );
}

export default App;
