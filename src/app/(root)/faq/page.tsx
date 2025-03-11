import Faq from "@/components/Faq";
import { Plane } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="wrapper">
      <Faq bgColor="bg-background" />

      <div className="text-primary-foreground space-y-6">
        <h2 className="lg:text-4xl text-2xl">
          A Journey Through History and Culture
        </h2>
        <div className="text-primary-foreground/90 space-y-4">
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
        </div>

        <div className="text-primary-foreground/95 space-y-3">
          <span className="flex gap-3 text-lg font-semibold">
            <Plane fill="currentcolor" className="shrink-0" />
            Pamukkale Paradise: Soaking in the Natural Thermal Springs and
            Cotton Castle Terraces
          </span>
          <span className="flex gap-3 text-lg font-semibold">
            <Plane fill="currentcolor" className="shrink-0" /> We believe travel
            fosters understanding
          </span>
          <span className="flex gap-3 text-lg font-semibold">
            <Plane fill="currentcolor" className="shrink-0" /> Ephesus
            Expedition: Tracing Ancient Ruins and Roman Relics
          </span>
          <span className="flex gap-3 text-lg font-semibold">
            <Plane fill="currentcolor" className="shrink-0" /> Ephesus
            Expedition: Tracing Ancient Ruins and Roman Relics
          </span>
        </div>

        <h2 className="lg:text-4xl text-2xl">
          Tracing Ancient Ruins and Roman Relics
        </h2>
        <div className="text-primary-foreground/90 space-y-4">
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
        </div>

        <h2 className="lg:text-4xl text-2xl">Destination Guides </h2>
        <div className="text-primary-foreground/90 space-y-4">
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
