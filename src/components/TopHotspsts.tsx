import React from "react";

const TopHotspsts = () => {
  return (
    <section id="topTravelHotspot" className="wrapper py-[6rem] space-y-12">
      <div className="flex flex-col items-center leading-tight">
        <p className="title">Top Destination</p>
        <h1 className="lg:w-[35rem] text-center">
          {`${"Unveiling World's Top Travel Hotspots"}`}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[411px] rounded-lg bg-[#C4C4C4] overflow-hidden relative">
          <div className="text-foreground absolute bottom-6 left-6">
            <p className="text-2xl">Pryde mountains</p>
            <p className="text-sm">Prydelands, 100 Trips</p>
          </div>
        </div>

        <div className="col-span-1 h-[411px] rounded-lg bg-[#9DA6AA] overflow-hidden relative">
          <div className="text-foreground absolute bottom-6 left-6">
            <p className="text-2xl">Eiffel Tower</p>
            <p className="text-sm">France, 150 Trips</p>
          </div>
        </div>

        <div className="col-span-1 h-[411px] rounded-lg bg-[#9DA6AA] overflow-hidden relative">
          <div className="text-foreground absolute bottom-6 left-6">
            <p className="text-2xl">Iceland</p>
            <p className="text-sm">Prydelands, 100 Trips</p>
          </div>
        </div>

        <div className="col-span-1 h-[411px] rounded-lg bg-[#9DA6AA] overflow-hidden relative">
          <div className="text-foreground absolute bottom-6 left-6">
            <p className="text-2xl">Pryde mountains</p>
            <p className="text-sm">Prydelands, 100 Trips</p>
          </div>
        </div>

        <div className="col-span-1 h-[411px] rounded-lg bg-[#9DA6AA] overflow-hidden relative">
          <div className="text-foreground absolute bottom-6 left-6">
            <p className="text-2xl">Pryde mountains</p>
            <p className="text-sm">Prydelands, 100 Trips</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHotspsts;
