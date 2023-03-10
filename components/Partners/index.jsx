import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const partnersData = [
  
  {
    id: 2,
    name: "Heroes Uprising",
    href: "https://heroesuprising.com",
    image: "/images/partners/logohu.png",
  },
  {
    id: 3,
    name: "NomadFury",
    href: "#",
    image: "/images/partners/NF2023 logo.png",
  },
  {
    id: 4,
    name: "Web3 Bacolod",
    href: "#",
    image: "/images/partners/Web3bcdlogo.png",
  },
  {
    id: 5,
    name: "Web3 Bohol",
    href: "#",
    image: "/images/partners/Web3bohol7.png",
  },
  {
    id: 6,
    name: "Web3 Dumaguete",
    href: "#",
    image: "/images/partners/Web3dumaguete.png",
  },
  {
    id: 7,
    name: "Web3 Lounge",
    href: "#",
    image: "/images/partners/web3loungeprofilepicz.png",
  },
];

const Partners = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          <SectionTitle
          title="Partnered with"
          paragraph=""
          center
          mb="80px"
        />
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {partnersData.map((partner) => (
                <SinglePartner key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

const SinglePartner = ({ partner }) => {
  const { href, image, name } = partner;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
