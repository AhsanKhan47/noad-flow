"use client";
import ExploreOptions from "@/components/explore/exploreOptions";
import Wrapper from "@/components/shared/wrapper";
import CardBody from "@/components/explore/CardBody";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <CardBody />
        <ExploreOptions />
      </Wrapper>
    </main>
  );
}
