import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";

export const metadata = { title: "About | Recrute Philippines" };

export default function Page() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
}

