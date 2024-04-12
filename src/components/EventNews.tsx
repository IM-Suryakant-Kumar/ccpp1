import Image from "next/image";

const EventNews = () => {
  return (
    <div className="flex min-h-8 items-center justify-center gap-4 bg-[#F4F4F4] md:gap-8 md:min-h-11">
      <Image className="cursor-pointer" width={16} height={16} src="/lt.svg" alt="lt" />{" "}
      <p className="text-sm text-center">Get 10% off on business sign up</p>
      <Image className="cursor-pointer" width={16} height={16} src="/gt.svg" alt="gt" />
    </div>
  );
};

export default EventNews;
