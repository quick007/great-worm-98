const Footer = () => {

  const links: {name: string, link: string, diffSite?: boolean}[] = [
    // imo looks bad with 4 links, we'll put the faq on the homepage
    // {
    //   name: "faq",
    //   link: "/faq"
    // },
    {
      name: "privacy",
      link: "/privacy-policy"
    },
    {
      name: "terms",
      link: "/terms-of-service"
    },
    {
      name: "github",
      link: "https://github.com/Wave-Studio/reservations",
      diffSite: true
    }
  ]

  return (
    <div class="flex flex-col items-center text-sm">
      <p class="flex font-bold">
        a{" "}
        <a href="https://wave-studios.netlify.app/" target="_blank" class="mx-1 bg-gradient-to-b from-[#234c70] to-[#0a3860] text-transparent bg-clip-text hover:brightness-200 transition duration-300">
          Wave Studios
        </a>{" "}
        project
      </p>
      <div className="flex my-2 underline gap-8 font-medium">
        {links.map(link => (
          <a href={link.link} target={link.diffSite ? "_blank" : "_self"} referrerpolicy={link.diffSite ? "no-referrer" : undefined}>{link.name}</a>
        ))}
        
      </div>
    </div>
  );
};

export default Footer;
