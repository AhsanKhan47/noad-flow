"use client";
import Explore from "@/components/explore/ExploreOptions";
import Wrapper from "@/components/shared/wrapper";
import CardBody from "@/components/explore/CardBody";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <CardBody />
        <Explore />
      </Wrapper>
    </main>
  );
}
