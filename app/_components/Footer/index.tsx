import { Container } from "@/app/_components/Container";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <Container>
      <div className="border-t border-gray-50 border-lightAccent py-12 text-center">
        <Facebook color="#F5845D" className="inline mx-2" />
        <Linkedin color="#F5845D" className="inline mx-2" />
        <Instagram color="#F5845D" className="inline mx-2" />
      </div>
    </Container>
  );
}
