"use client";

import CardBody from "@/components/explore/cardBody";
import ExploreOption from "@/components/explore/exploreoptions";
import Wrapper from "@/components/shared/wrapper";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <CardBody />
        <ExploreOption />
      </Wrapper>
    </main>
  );
}
