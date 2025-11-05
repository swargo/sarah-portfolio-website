import { Header } from "@/app/_components/Header";
import { FlexContainer } from "@/app/_components/Container";
import Image from "next/image";

export default function About() {
  return (
    <FlexContainer>
      <div className="flex-1 basis-[50%] mr-6">
        <Header title={"About Sarah Jones"} subtitle={"Illustrative Artist"} />
        <p className="mt-5">
          Born and raised in Santa Fe, New Mexico, I have always been surrounded
          by creative people who thrive in a multitude of artistic forms - it
          just made sense that I would find my own love of art early on! I ended
          up going to a high school that specializes in the arts, where I
          majored in visual arts. After graduation, I completely changed routes
          and got a Bachelor's degree in Technology Management from a small
          college in Salt Lake City, Utah. Throughout college, I continued to
          work on art and eventually started up an Etsy shop where I sold
          various drawings. Familiarizing myself more with digital art, I began
          to make my art into stickers through an outside party, which helped me
          find a good amount of bliss. I also started taking part in festivals
          to share and sell my art with people in my city. <br />
          <br />I am currently wrapping up my second Bachelor's degree, this
          time in something I truly love - Illustrative Design - which has
          helped me to re-ignite my love of drawing, mainly with ink pens and
          graphite pencils, but to also discover a love of acrylic painting!
        </p>
      </div>
      <div className="flex-1 basis-[50%] ml-6">
        <Image
          src="/images/sarah_about.png"
          width={508}
          height={677}
          alt="Image of Sarah Jones, the artist. She is smiling with orange hair and a wide brimmed sun hat."
        />
      </div>
    </FlexContainer>
  );
}
