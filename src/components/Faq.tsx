import { faqData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <section id="faq" className=" bg-foreground">
      <div className="wrapper py-[6rem] space-y-14">
        <div className="leading-tight ">
          <p className="title">FAQ</p>
          <h1 className="lg:w-[35rem]">Unpacking Your Travel Questions</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <Image src={"/faq.png"} width={500} height={501} alt="FAQ" />
          </div>
          <div className="lg:w-[60%] space-y-6">
            {faqData.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "bg-background text-primary-foreground/80 text-2xl px-8 py-6 font-semibold flex justify-between gap-5 cursor-pointer",
                  {
                    "border-b-6 border-secondary text-primary-foreground":
                      selectedFaq === i,
                  }
                )}
                onClick={() => setSelectedFaq(i)}
              >
                <div>
                  <p>{item.question}</p>
                  {selectedFaq === i && (
                    <p className="text-base text-primary-foreground/70 mt-4">
                      {item.answer}
                    </p>
                  )}
                </div>
                <div>{selectedFaq === i ? <ChevronDown /> : <ChevronUp />}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
