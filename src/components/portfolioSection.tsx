import Image from "next/image";

export default function portfolioSection() {
  return (
    <section className="py-20 px-5  max-w-[1200px] mx-auto">
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <Image src="/assets/portfolio-bg.png" alt="Portfolio Background" className="w-full h-[400px] object-cover" width={1000} height={1000} />
      </div>
    </section>
  );
}
