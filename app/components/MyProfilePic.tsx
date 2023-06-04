import Image from 'next/image';
import React from 'react';

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/profile.png"
        alt="soyab mostofa"
        width={200}
        height={200}
        className="mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black"
        priority={true}
      />
    </section>
  );
}
