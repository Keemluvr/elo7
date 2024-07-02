"use client";

import Hero from "@/components/hero";
import SaleswomanReview from "@/components/saleswoman-review";
import Team from "@/components/team";
import Culture from "@/components/culture";
import SewingBanner from "@/components/sewing-banner";
import OpenPositions from "@/components/open-positions";

export default function Home() {
  return (
    <main>
      <Hero />
      <SaleswomanReview />
      <Team />
      <section>
        <Culture />
        <SewingBanner />
      </section>
      <OpenPositions />
    </main>
  );
}
