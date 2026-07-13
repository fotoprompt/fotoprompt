export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload Your Image",
      description:
        "Drag & drop or choose any image you want to analyze.",
    },
    {
      number: "2",
      title: "Generate AI Prompt",
      description:
        "Our AI analyzes the image and creates a detailed prompt.",
    },
    {
      number: "3",
      title: "Copy the Prompt",
      description:
        "Copy your prompt instantly and use it in ChatGPT, Midjourney, Flux, Gemini and more.",
    },
    {
      number: "4",
      title: "Create Amazing Images",
      description:
        "Paste the prompt into your favorite AI image generator and start creating.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          How It Works
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Turn any image into a detailed AI prompt in four simple steps.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="rounded-3xl border border-white/10 bg-[#121216] p-10">

            <div className="aspect-video rounded-2xl bg-[#1b1b22] flex items-center justify-center">

              <span className="text-gray-500 text-lg">
                Illustration Here
              </span>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-10">

            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-gray-400 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}