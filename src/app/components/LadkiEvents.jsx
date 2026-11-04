"use client";

export default function LadkiEvents() {
  const addToCalendar = () => {
    const event = {
      title: "Mehendi Ceremony",
      start: "20261112T110000",
      end: "20261112T140000",
      location: "Delhi, India",
      description:
        "Mehendi Ceremony ❤️\nDress Code: Blue\nPlease save this event to your calendar!",
    };

    const url = new URL("https://calendar.google.com/calendar/render");

    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", event.title);
    url.searchParams.set("dates", `${event.start}/${event.end}`);
    url.searchParams.set("details", event.description);
    url.searchParams.set("location", event.location);
    url.searchParams.set("ctz", "Asia/Kolkata");

    window.open(url.toString(), "_blank");
  };

  const addSangeetToCalendar = () => {
    const url = new URL("https://calendar.google.com/calendar/render");

    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Sangeet Ceremony");
    url.searchParams.set("dates", "20261112T150000/20261112T180000");
    url.searchParams.set(
      "details",
      "Sangeet Ceremony ❤️\nDress Code: Black\nPlease save this event to your calendar!",
    );
    url.searchParams.set("location", "Delhi, India");
    url.searchParams.set("ctz", "Asia/Kolkata");

    window.open(url.toString(), "_blank");
  };




const addBangleToCalendar = () => {
  const url = new URL(
    "https://calendar.google.com/calendar/render"
  );

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "Bangle Ceremony");
  url.searchParams.set(
    "dates",
    "20261113T090000/20261113T120000"
  );
  url.searchParams.set(
    "details",
    "Bangle Ceremony ❤️\nDress Code: Pink\nPlease save this event to your calendar!"
  );
  url.searchParams.set("location", "Delhi, India");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};



const addHaldiToCalendar = () => {
  const url = new URL(
    "https://calendar.google.com/calendar/render"
  );

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "Haldi Ceremony");
  url.searchParams.set(
    "dates",
    "20261113T150000/20261113T180000"
  );
  url.searchParams.set(
    "details",
    "Haldi Ceremony 💛\nDress Code: Yellow\nPlease save this event to your calendar!"
  );
  url.searchParams.set("location", "Delhi, India");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};


  return (
    <div
      id="itinerary"
      className="flex scroll-mt-6 flex-col justify-center mt-10 lg:mt-40 items-center"
    >
      <p className="md:text-2xl text-[16px] text-[#BC610A] font-cormorant-garamond">
        Two days of celebration
      </p>
      <h2
        className="text-[#BC610A] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        Wedding Events
      </h2>

      <h2 className="text-white bg-[#BC610A] font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] mt-5 border px-6 py-2 rounded-xl">
        Thursday, 12th November 2026
      </h2>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-16 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/mehandi.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-12">
          <h2 className="text-[#805505] font-cormorant-garamond text-[26px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Mehendi
          </h2>

          <p className="text-[#805505] font-cormorant-garamond text-base md:text-lg mt-3">
            11:00 am onwards
          </p>
          <p className="text-[#805505] font-cormorant-garamond text-[15px] md:text-base">
            Dress Code: Blue
          </p>

          {/* <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#805505] underline text-sm font-cormorant-garamond"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to Calender
          </a> */}

          <button
            onClick={addToCalendar}
            className="text-[#805505] underline text-sm font-cormorant-garamond mt-2 cursor-pointer"
          >
            Add to Calendar
          </button>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-16 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/sangeet_event_n.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-18">
          <h2 className="text-[#fff] font-cormorant-garamond text-[26px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Sangeet
          </h2>

          <p className="text-[#fff] font-cormorant-garamond text-base md:text-lg mt-3">
            3:00 pm onwards
          </p>
          <p className="text-[#fff] font-cormorant-garamond text-[15px] md:text-base">
            Dress Code: Black
          </p>

          {/* <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#fff] underline text-sm font-cormorant-garamond mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to Calender
          </a> */}
          <button
            onClick={addSangeetToCalendar}
            className="text-[#fff] underline text-sm font-cormorant-garamond mt-2 cursor-pointer"
          >
            Add to Calendar
          </button>
        </div>
      </div>

      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>

        <span className="mx-4 text-[#BC610A] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>
      </div>

      <h2 className="font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-8 py-2 rounded-xl text-white bg-[#BC610A]">
        Friday, 13th November 2026
      </h2>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-6 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/bangle.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-14">
          <h2 className="text-[#B9031A] font-cormorant-garamond text-[26px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Bangle Ceremony
          </h2>

          <p className="text-[#B9031A] font-cormorant-garamond text-base md:text-lg mt-3">
            9:00 am onwards
          </p>
          <p className="text-[#B9031A] font-cormorant-garamond text-[15px] md:text-base">
            Dress Code: Pink
          </p>

        <button
  onClick={addBangleToCalendar}
  className="text-[#B9031A] underline text-sm font-cormorant-garamond mt-2 cursor-pointer"
>
  Add to Calendar
</button>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-16 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/haldi_v.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-10">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[26px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Haldi
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-3">
            3:00 pm onwards
          </p>
          <p className="text-[#BC610A] font-cormorant-garamond text-[15px] md:text-base">
            Dress Code: Yellow
          </p>

          <button
  onClick={addHaldiToCalendar}
  className="text-[#BC610A] underline text-sm font-cormorant-garamond mt-2 cursor-pointer"
>
  Add to Calendar
</button>
        </div>
      </div>
    </div>
  );
}
