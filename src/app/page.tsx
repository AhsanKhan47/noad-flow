"use client";

import ExploreOption from "@/components/explore/explore";
import CardBody from "@/components/explore/cardBody";
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
