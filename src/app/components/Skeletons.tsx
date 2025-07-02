export function WeatherOverviewCardSkeleton() {
  return (
    <div className="bg-borderColor w-full lg:w-2/3 lg:h-80 rounded-2xl p-4 animate-pulse">
      <div className="flex justify-between border-b border-background pb-2">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-24 h-4 bg-gray-400 rounded"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-4 bg-gray-400 rounded"></div>
          <div className="w-16 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center pt-4">
        <div className="flex justify-center w-full lg:w-1/2 mt-2 h-52 lg:h-auto">
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-center">
              <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
              <div className="w-20 h-16 bg-gray-400 rounded"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-32 h-4 bg-gray-400 rounded"></div>
              <div className="flex gap-4 mt-4">
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-1/2 mt-10 lg:mt-2">
          <div className="flex flex-col gap-2 w-4/5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`flex justify-between ${
                  i !== 5 ? "border-b border-background pb-2" : ""
                }`}
              >
                <div className="w-24 h-4 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeatherTomorrowCardSkeleton() {
  return (
    <div className="bg-borderColor w-full lg:w-2/3 lg:h-80 rounded-2xl p-4 animate-pulse">
      <div>
        <div className="flex justify-between border-b border-background pb-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-400 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-4 bg-gray-400 rounded"></div>
            <div className="w-16 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center pt-4">
          <div className="flex justify-center  w-full lg:w-1/2 mt-2 h-52 lg:h-auto">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-28 h-28 bg-gray-400 rounded-full"></div>
                <div className="w-32 h-4 bg-gray-400 rounded"></div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-4 mt-4 text-xl">
                  <div className="w-16 h-4 bg-gray-400 rounded"></div>
                  <div className="w-16 h-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full lg:w-1/2 mt-10 lg:mt-2">
            <div className="flex flex-col gap-2 w-4/5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex justify-between ${
                    i !== 5 ? "border-b border-background pb-2" : ""
                  }`}
                >
                  <div className="w-24 h-4 bg-gray-400 rounded"></div>
                  <div className="w-16 h-4 bg-gray-400 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeatherNextDaysCardSkeleton() {
  return (
    <div className="bg-borderColor w-full lg:w-2/3 lg:h-80 rounded-2xl p-4 animate-pulse">
      <div className="flex flex-col lg:flex-row justify-between gap-2 lg:h-full">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="w-full lg:w-24 2xl:w-32 flex lg:flex-col justify-between gap-3 items-center bg-background rounded-2xl px-4 py-2 lg:p-2"
          >
            <div className="border-r lg:border-b border-borderColor pr-4 lg:pb-2">
              <div className="h-4 w-16 mx-auto bg-gray-400 rounded"></div>
            </div>
            <div className="h-3 w-12 bg-gray-400 rounded"></div>
            <div className="w-14 h-10 bg-gray-400 rounded-full"></div>
            <div className="h-3 w-20 bg-gray-400 rounded"></div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="h-4 w-14 bg-gray-400 rounded"></div>
              <div className="h-4 w-14 bg-gray-400 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MoonPhaseCardSkeleton() {
  return (
    <div className="bg-borderColor w-full lg:w-1/3 rounded-2xl lg:h-80 p-4 animate-pulse">
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex justify-center border-b border-background pb-2">
          <div className="w-24 h-4 bg-gray-400 rounded"></div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-28 h-28 bg-gray-400 rounded-full"></div>
          <div className="w-32 h-4 bg-gray-400 rounded"></div>
        </div>

        <div className="flex justify-center lg:justify-between gap-2 md:gap-12 lg:gap-4 md:mt-8 lg:mt-0">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="flex flex-col items-center gap-1" key={index}>
              <div className="w-7 h-7 md:w-10 md:h-10 bg-gray-400 rounded-full"></div>
              <div className="w-9 h-3 bg-gray-400 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MapCardSkeleton() {
  return (
    <div className="w-full h-[450px] lg:h-full rounded-2xl overflow-hidden border border-borderColor bg-borderColor animate-pulse"></div>
  );
}

export function ChartsSkeleton() {
  return (
    <div className="bg-borderColor w-full rounded-2xl p-4 animate-pulse">
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex justify-center border-b border-background pb-2">
          <div className="w-40 h-4 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-full h-40 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
}
