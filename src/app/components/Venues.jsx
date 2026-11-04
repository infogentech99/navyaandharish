"use client";

const venues = [
  {
    title: "Sai Sadhana ",
    place: "Byrasandra Extension, Suddaguntte Palya, C V Raman Nagar post, Bangalore",
    image: "/assets/marudhar.webp",
    link: "https://maps.app.goo.gl/zPYMdmL9YxFEMseF7",
  },


];

export default function Venues() {
  return (
    <section id="venue" className="w-full scroll-mt-6 px-4 md:px-10 pt-20 flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-[#BC610A] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        The Venue
      </h2>

      {/* Pin icon */}
      {/* <svg
        className="mt-4 w-8 h-8 text-[#b8903a]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg> */}

      {/* Cards */}
      <div className="mt-1 w-full max-w-4xl grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
        {venues.map((v) => (
          <div key={v.title} className="flex flex-col items-center text-center">
            {/* <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <img
                src={v.image}
                alt={v.title}
                className="w-full h-full object-cover"
              />
            </div> */}

            <h3 className="mt-8 text-xl text-[#BC610A] font-serif">
              {v.title}
            </h3>
<h3 className="mt-1 text-[16px] text-[#BC610A] font-serif">
              {v.place}
            </h3>
          

            <a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full rounded-full border border-[#c9a45c] bg-[#f3e4c8]/70
              py-3 text-sm text-[#BC610A] font-serif
              hover:bg-[#BC610A] hover:text-white transition-colors"
            >
              Tap for location
            </a>
          </div>
        ))}
      </div>
    
    </section>
  );
}
