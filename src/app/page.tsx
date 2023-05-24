"use client";
import Wrapper from "@/components/shared/wrapper";
import CardBody from "@/components/explore/CardBody";
import Explore from "@/components/explore/ExploreOptions";

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
