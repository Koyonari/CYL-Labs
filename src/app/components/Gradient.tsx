import Image from "next/image";

export default function Gradient() {
  return (
    <div className="min-h-[300vh] absolute top-[-40vh] inset-0 pointer-events-none overflow-hidden">
      <Image
        src="/gradient.png"
        alt="gradient"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
}
