import Container from "components/common/Container";

const Hero = ({ eyebrow, title, subtitle, image }) => {
  return (
    <div className="relative z-10 mt-[-103px]">
      <div className="pt-[103px]">
        <div className="py-3xl relative z-20">
          <Container className="text-white">
            <span className="text-eyebrow mb-4 uppercase">{eyebrow}</span>
            <h1 className="mb-2 text-4xl font-semibold">{title}</h1>
            <p className="text-normal">{subtitle}</p>
          </Container>
        </div>
        <div className="">
          <img src={image} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 h-full w-full bg-black bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
