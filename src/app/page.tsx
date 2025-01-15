import GlobalPayroll from "@/components/FirstPage/GlobalPayroll";
import Onboarded from "@/components/FirstPage/Onboarded";
import TrustedBy from "@/components/FirstPage/TrustedBy";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <GlobalPayroll />
      <Image src="/Dashboard.png" alt="Payrole Logo"  unoptimized className="w-full px-20" width={100} height={100} />
      <TrustedBy />
      <Onboarded />
    </main>
  );
}
