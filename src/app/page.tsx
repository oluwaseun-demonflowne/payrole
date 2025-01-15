import Anywhere from "@/components/FirstPage/Anywhere";
import GetStarted from "@/components/FirstPage/GetStarted";
import GlobalPayroll from "@/components/FirstPage/GlobalPayroll";
import Onboarded from "@/components/FirstPage/Onboarded";
import PaymentFaster from "@/components/FirstPage/PaymentFaster";
import TrustedBy from "@/components/FirstPage/TrustedBy";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <GlobalPayroll />
      <Image
        src="/Dashboard.png"
        alt="Payrole Logo"
        unoptimized
        className="w-full px-20"
        width={100}
        height={100}
      />
      <TrustedBy />
      <Onboarded />
      <Anywhere />
      <PaymentFaster />
      <GetStarted />
    </main>
  );
}
