"use client";

import { useState } from "react";

type Lang = "bn" | "en";

const tableClass =
  "w-full border-collapse text-left text-sm md:text-base overflow-x-auto";
const thClass =
  "border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-800";
const tdClass = "border border-gray-200 px-3 py-2 text-gray-700 align-top";
const sectionClass = "space-y-3";
const h2Class = "text-xl md:text-2xl font-semibold text-gray-900 pt-2";
const listClass = "list-disc pl-5 space-y-2 text-gray-700";
const pClass = "text-gray-700 leading-relaxed";

export default function PrivacyPolicyContent() {
  const [lang, setLang] = useState<Lang>("bn");

  return (
    <div className="max-w-3xl">
      <div
        className="inline-flex rounded-lg border border-gray-200 p-1 mb-8 bg-white"
        role="tablist"
        aria-label="Language"
      >
        <button
          type="button"
          role="tab"
          aria-selected={lang === "bn"}
          onClick={() => setLang("bn")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            lang === "bn"
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          বাংলা
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={lang === "en"}
          onClick={() => setLang("en")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            lang === "en"
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          English
        </button>
      </div>

      <article className="space-y-8 prose-headings:scroll-mt-24">
        {lang === "bn" ? <BanglaPolicy /> : <EnglishPolicy />}
      </article>
    </div>
  );
}

function BanglaPolicy() {
  return (
    <>
      <section className={sectionClass}>
        <h2 className={h2Class}>মিনার একাডেমি অ্যাপের প্রাইভেসি পলিসি</h2>
        <p className={pClass}>
          মিনার একাডেমি মাদ্রাসা শিক্ষার্থীদের জন্য একটি ডিজিটাল লার্নিং
          প্ল্যাটফর্ম। এই পলিসিতে বলা হয়েছে, আমাদের অ্যাপ ও ওয়েবসাইট ব্যবহার
          করলে আমরা কোন তথ্য সংগ্রহ করি, কেন করি, কীভাবে সুরক্ষিত রাখি এবং আপনার
          কী কী অধিকার আছে।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>আমরা কারা</h2>
        <p className={pClass}>
          মিনার একাডেমি (&ldquo;আমরা&rdquo;) দাখিল, আলিম, এসএসসি, এইচএসসি এবং
          ক্লাস ৬ থেকে ১২ পর্যন্ত শিক্ষার্থীদের জন্য লাইভ ও রেকর্ডেড ক্লাস,
          প্র্যাকটিস MCQ টেস্ট, স্মার্ট নোট, রিপোর্ট কার্ড এবং স্কিল
          ডেভেলপমেন্ট কোর্স সরবরাহ করে। আমাদের অ্যাপ ব্যবহার করলে আপনি এই
          পলিসির শর্তে সম্মতি দিচ্ছেন। সম্মত না হলে অনুগ্রহ করে অ্যাপ ব্যবহার
          করবেন না।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>যেসব তথ্য সংগ্রহ করি</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>তথ্যের ধরন</th>
                <th className={thClass}>উদাহরণ</th>
                <th className={thClass}>কীভাবে পাই</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>অ্যাকাউন্ট তথ্য</td>
                <td className={tdClass}>
                  নাম, মোবাইল নম্বর, ইমেইল, পাসওয়ার্ড (এনক্রিপ্টেড আকারে),
                  প্রোফাইল ছবি (ঐচ্ছিক)
                </td>
                <td className={tdClass}>
                  রেজিস্ট্রেশন ও লগ-ইনের সময় আপনি দেন
                </td>
              </tr>
              <tr>
                <td className={tdClass}>শিক্ষাগত তথ্য</td>
                <td className={tdClass}>
                  শ্রেণি, বিভাগ, মাদ্রাসা বা প্রতিষ্ঠানের নাম, পরীক্ষার বছর
                </td>
                <td className={tdClass}>কোর্সে ভর্তি হওয়ার সময় আপনি দেন</td>
              </tr>
              <tr>
                <td className={tdClass}>শেখার কার্যক্রম</td>
                <td className={tdClass}>
                  এনরোল করা কোর্স, দেখা ক্লাস, MCQ টেস্টের উত্তর ও ফলাফল,
                  রিপোর্ট কার্ড
                </td>
                <td className={tdClass}>
                  অ্যাপ ব্যবহারের সময় স্বয়ংক্রিয়ভাবে তৈরি হয়
                </td>
              </tr>
              <tr>
                <td className={tdClass}>পেমেন্ট সংক্রান্ত তথ্য</td>
                <td className={tdClass}>
                  লেনদেনের আইডি, কোর্সের নাম, পরিমাণ, পেমেন্ট মাধ্যম ও তারিখ
                </td>
                <td className={tdClass}>
                  পেমেন্ট সম্পন্ন হলে গেটওয়ে থেকে পাই। কার্ড বা মোবাইল ব্যাংকিং
                  পিন আমরা দেখি না ও সংরক্ষণ করি না
                </td>
              </tr>
              <tr>
                <td className={tdClass}>ডিভাইস ও ব্যবহারের তথ্য</td>
                <td className={tdClass}>
                  ডিভাইসের মডেল, অপারেটিং সিস্টেম, অ্যাপ ভার্সন, আইপি ঠিকানা,
                  ক্র্যাশ রিপোর্ট, নোটিফিকেশন টোকেন
                </td>
                <td className={tdClass}>অ্যাপ চালানোর সময় স্বয়ংক্রিয়ভাবে</td>
              </tr>
              <tr>
                <td className={tdClass}>যোগাযোগের তথ্য</td>
                <td className={tdClass}>
                  সাপোর্টে পাঠানো বার্তা, ফোন কল বা ফর্মে দেওয়া তথ্য
                </td>
                <td className={tdClass}>আপনি আমাদের সাথে যোগাযোগ করলে</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={pClass}>
          আমরা আপনার সঠিক অবস্থান (GPS), কন্টাক্ট লিস্ট, এসএমএস, ক্যামেরা বা
          মাইক্রোফোনের তথ্য সংগ্রহ করি না।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>তথ্য ব্যবহারের উদ্দেশ্য</h2>
        <ul className={listClass}>
          <li>অ্যাকাউন্ট তৈরি, লগ-ইন এবং আপনার পরিচয় যাচাই করতে।</li>
          <li>
            কোর্সে ভর্তি, লাইভ ও রেকর্ডেড ক্লাস, নোট ও টেস্ট সরবরাহ করতে।
          </li>
          <li>
            আপনার অগ্রগতি, রিপোর্ট কার্ড ও পারফরম্যান্স বিশ্লেষণ দেখাতে।
          </li>
          <li>পেমেন্ট প্রক্রিয়া, রসিদ প্রদান এবং রিফান্ড সংক্রান্ত কাজে।</li>
          <li>
            ক্লাসের সময়সূচি, ফলাফল ও নতুন ব্যাচ সম্পর্কে নোটিফিকেশন বা বার্তা
            পাঠাতে।
          </li>
          <li>
            কারিগরি সমস্যা সমাধান, অ্যাপের মান উন্নয়ন এবং নিরাপত্তা নিশ্চিত
            করতে।
          </li>
          <li>সার্টিফিকেট ইস্যু ও যাচাই করতে।</li>
          <li>আইনি বাধ্যবাধকতা পূরণ করতে।</li>
        </ul>
        <p className={pClass}>
          আমরা আপনার ব্যক্তিগত তথ্য বিক্রি করি না এবং বিজ্ঞাপনদাতাদের কাছে ভাড়া
          দিই না।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>তথ্য শেয়ার</h2>
        <p className={pClass}>
          শুধু নিচের ক্ষেত্রগুলোতে এবং প্রয়োজনের সীমার মধ্যে তথ্য শেয়ার করা
          হয়:
        </p>
        <ul className={listClass}>
          <li>
            <strong>সেবাদাতা প্রতিষ্ঠান:</strong> পেমেন্ট গেটওয়ে ও মোবাইল
            ব্যাংকিং সেবা, ক্লাউড হোস্টিং ও ভিডিও স্ট্রিমিং সেবা, লাইভ ক্লাস
            প্ল্যাটফর্ম, নোটিফিকেশন ও ক্র্যাশ রিপোর্টিং সেবা। তারা শুধু আমাদের
            নির্দেশিত কাজের জন্য তথ্য ব্যবহার করতে পারে।
          </li>
          <li>
            <strong>শিক্ষক ও একাডেমিক টিম:</strong> ক্লাস পরিচালনা ও
            শিক্ষার্থীর অগ্রগতি মূল্যায়নের জন্য শিক্ষার্থীর নাম, শ্রেণি ও
            ফলাফল।
          </li>
          <li>
            <strong>আইনি প্রয়োজনে:</strong> আদালত বা সরকারি কর্তৃপক্ষ
            আইনানুগভাবে চাইলে।
          </li>
          <li>
            <strong>আপনার অনুমতিতে:</strong> অন্য কোনো ক্ষেত্রে আপনার স্পষ্ট
            সম্মতি নিয়ে।
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>শিক্ষার্থী ও অভিভাবক</h2>
        <ul className={listClass}>
          <li>
            আমাদের বেশিরভাগ শিক্ষার্থী ১৮ বছরের কম বয়সী। ১৮ বছরের কম বয়সী
            শিক্ষার্থীদের অ্যাকাউন্ট অভিভাবকের জ্ঞাত ও সম্মতিতে খোলা উচিত।
          </li>
          <li>
            আমরা শিক্ষার্থীদের কাছ থেকে শুধু পড়াশোনার জন্য প্রয়োজনীয় তথ্য
            চাই।
          </li>
          <li>
            শিক্ষার্থীদের তথ্য আমরা বিজ্ঞাপন বা আচরণভিত্তিক মার্কেটিংয়ের জন্য
            ব্যবহার করি না।
          </li>
          <li>
            অ্যাপে কোনো সামাজিক যোগাযোগ বা অপরিচিতদের সাথে চ্যাটের সুযোগ নেই বলে
            শিক্ষার্থীর তথ্য প্রকাশ্যে দেখা যায় না।
          </li>
          <li>
            অভিভাবক চাইলে সন্তানের তথ্য দেখা, সংশোধন বা মুছে ফেলার অনুরোধ করতে
            পারেন। যোগাযোগের মাধ্যম নিচে দেওয়া আছে।
          </li>
          <li>
            আমরা জানতে পারলে, অভিভাবকের সম্মতি ছাড়া ১৩ বছরের কম বয়সী কারো
            তথ্য সংগ্রহ হয়ে থাকলে তা দ্রুত মুছে ফেলি।
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>অ্যাপ পারমিশন</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>পারমিশন</th>
                <th className={thClass}>কেন দরকার</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>ইন্টারনেট ও নেটওয়ার্ক অবস্থা</td>
                <td className={tdClass}>
                  ক্লাস স্ট্রিমিং, লগ-ইন ও ডেটা সিঙ্ক করতে
                </td>
              </tr>
              <tr>
                <td className={tdClass}>নোটিফিকেশন</td>
                <td className={tdClass}>
                  ক্লাসের সময়, টেস্ট ও গুরুত্বপূর্ণ ঘোষণা জানাতে
                </td>
              </tr>
              <tr>
                <td className={tdClass}>স্টোরেজ বা ফাইল ডাউনলোড</td>
                <td className={tdClass}>
                  ক্লাস নোট ও লেকচার শিট ডাউনলোড করতে (যেখানে প্রযোজ্য)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={pClass}>
          আপনি ডিভাইসের সেটিংস থেকে যেকোনো সময় পারমিশন বন্ধ করতে পারেন। তবে এতে
          কিছু সুবিধা কাজ না-ও করতে পারে।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>সংরক্ষণ ও নিরাপত্তা</h2>
        <ul className={listClass}>
          <li>ডেটা ট্রান্সমিশনে HTTPS (এনক্রিপশন) ব্যবহার করা হয়।</li>
          <li>
            পাসওয়ার্ড হ্যাশ করে সংরক্ষণ করা হয়, সরাসরি পড়া যায় এমনভাবে নয়।
          </li>
          <li>
            তথ্যে প্রবেশাধিকার শুধু প্রয়োজনীয় দায়িত্বপ্রাপ্ত সদস্যদের জন্য
            সীমিত।
          </li>
          <li>
            অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত এবং সেবা দেওয়ার জন্য প্রয়োজনীয়
            সময় পর্যন্ত আমরা তথ্য রাখি। লেনদেনের রেকর্ড আইন ও হিসাব সংরক্ষণের
            প্রয়োজনে নির্দিষ্ট সময় পর্যন্ত রাখা হতে পারে।
          </li>
          <li>
            ইন্টারনেটে কোনো ব্যবস্থাই শতভাগ নিরাপদ নয়। তাই আপনার পাসওয়ার্ড কারো
            সাথে শেয়ার করবেন না।
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>আপনার অধিকার ও ডেটা মুছে ফেলা</h2>
        <p className={pClass}>আপনি যেকোনো সময় অনুরোধ করতে পারেন:</p>
        <ul className={listClass}>
          <li>আপনার তথ্যের কপি দেখতে বা চাইতে।</li>
          <li>ভুল তথ্য সংশোধন করতে।</li>
          <li>নোটিফিকেশন বা প্রচারমূলক বার্তা বন্ধ করতে।</li>
          <li>অ্যাকাউন্ট ও সংশ্লিষ্ট ব্যক্তিগত তথ্য মুছে ফেলতে।</li>
        </ul>
        <p className={pClass}>
          <strong>অ্যাকাউন্ট ও ডেটা ডিলিটের নিয়ম:</strong> রেজিস্টার্ড মোবাইল
          নম্বর বা ইমেইল উল্লেখ করে{" "}
          <a
            href="mailto:contactminaracademy@gmail.com"
            className="text-primary hover:underline"
          >
            contactminaracademy@gmail.com
          </a>{" "}
          ঠিকানায় &ldquo;অ্যাকাউন্ট ডিলিট অনুরোধ&rdquo; বিষয়ে ইমেইল করুন।
          পরিচয় যাচাইয়ের পর আমরা সাধারণত ৩০ দিনের মধ্যে অ্যাকাউন্ট ও ব্যক্তিগত
          তথ্য মুছে ফেলি। আইন বা হিসাব সংরক্ষণের জন্য বাধ্যতামূলক লেনদেনের
          রেকর্ড এর ব্যতিক্রম হতে পারে। অ্যাকাউন্ট মুছে ফেললে কোর্স অ্যাক্সেস ও
          রিপোর্ট কার্ড হারিয়ে যাবে।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>পলিসি পরিবর্তন</h2>
        <p className={pClass}>
          আমরা সময়ে সময়ে এই পলিসি হালনাগাদ করতে পারি। গুরুত্বপূর্ণ পরিবর্তন
          হলে অ্যাপ বা ওয়েবসাইটে জানানো হবে এবং কার্যকর তারিখ বদলে যাবে।
          পরিবর্তনের পর অ্যাপ ব্যবহার চালিয়ে গেলে নতুন পলিসিতে সম্মতি দেওয়া
          হয়েছে বলে গণ্য হবে।
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>যোগাযোগ</h2>
        <p className={pClass}>
          এই পলিসি নিয়ে প্রশ্ন বা অভিযোগ থাকলে যোগাযোগ করুন। সাপোর্ট সময়:
          প্রতিদিন সকাল ১০টা থেকে রাত ১০টা।
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>
            <strong>প্রতিষ্ঠান:</strong> মিনার একাডেমি
          </li>
          <li>
            <strong>ইমেইল:</strong>{" "}
            <a
              href="mailto:contactminaracademy@gmail.com"
              className="text-primary hover:underline"
            >
              contactminaracademy@gmail.com
            </a>
          </li>
          <li>
            <strong>ফোন:</strong>{" "}
            <a href="tel:01886929763" className="text-primary hover:underline">
              01886929763
            </a>
          </li>
          <li>
            <strong>ঠিকানা:</strong> ৫ম তলা, নূরুল ইসলাম ম্যানশন, ইস্ট সোলো
            শহর, চান্দগাঁও, চট্টগ্রাম
          </li>
          <li>
            <strong>ওয়েবসাইট:</strong>{" "}
            <a
              href="https://minaracademy.com"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              minaracademy.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

function EnglishPolicy() {
  return (
    <>
      <section className={sectionClass}>
        <h2 className={h2Class}>Minar Academy App Privacy Policy</h2>
        <p className={pClass}>
          Minar Academy is a digital learning platform for Madrasah students in
          Bangladesh. This policy explains what information our app and website
          collect, why we collect it, how we protect it, and what rights you
          have.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Who we are</h2>
        <p className={pClass}>
          Minar Academy (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides live and
          recorded classes, practice MCQ tests, smart notes, report cards and
          skill development courses for Dakhil, Alim, SSC, HSC and Class 6 to 12
          students. By using our app you agree to this policy. If you do not
          agree, please do not use the app.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Information we collect</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Type</th>
                <th className={thClass}>Examples</th>
                <th className={thClass}>How we get it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Account details</td>
                <td className={tdClass}>
                  Name, mobile number, email, password (stored encrypted),
                  profile photo (optional)
                </td>
                <td className={tdClass}>
                  You provide it when you register and log in
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Education details</td>
                <td className={tdClass}>
                  Class, group, madrasa or institution name, exam year
                </td>
                <td className={tdClass}>You provide it when you enroll</td>
              </tr>
              <tr>
                <td className={tdClass}>Learning activity</td>
                <td className={tdClass}>
                  Enrolled courses, classes watched, MCQ answers and scores,
                  report cards
                </td>
                <td className={tdClass}>
                  Generated automatically while you use the app
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Payment records</td>
                <td className={tdClass}>
                  Transaction ID, course name, amount, payment method, date
                </td>
                <td className={tdClass}>
                  Received from the payment gateway after payment. We never see
                  or store card numbers or mobile banking PINs
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Device and usage data</td>
                <td className={tdClass}>
                  Device model, operating system, app version, IP address, crash
                  reports, notification token
                </td>
                <td className={tdClass}>
                  Collected automatically when the app runs
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Communication</td>
                <td className={tdClass}>
                  Messages to support, details given on calls or forms
                </td>
                <td className={tdClass}>When you contact us</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={pClass}>
          We do not collect your precise location (GPS), contacts, SMS, camera
          or microphone data.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>How we use information</h2>
        <ul className={listClass}>
          <li>To create your account, log you in and verify your identity.</li>
          <li>
            To enroll you in courses and deliver live and recorded classes,
            notes and tests.
          </li>
          <li>
            To show your progress, report cards and performance analysis.
          </li>
          <li>To process payments, issue receipts and handle refunds.</li>
          <li>To send class schedules, results and batch announcements.</li>
          <li>
            To fix technical problems, improve the app and keep it secure.
          </li>
          <li>To issue and verify certificates.</li>
          <li>To meet legal obligations.</li>
        </ul>
        <p className={pClass}>
          We do not sell your personal information and we do not rent it to
          advertisers.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Sharing</h2>
        <p className={pClass}>
          We share information only in the cases below, and only as much as
          needed:
        </p>
        <ul className={listClass}>
          <li>
            <strong>Service providers:</strong> payment gateways and mobile
            banking services, cloud hosting and video streaming, live class
            platforms, notification and crash reporting services. They may use
            data only for the work we assign.
          </li>
          <li>
            <strong>Teachers and academic staff:</strong> student name, class
            and results, to run classes and assess progress.
          </li>
          <li>
            <strong>Legal requests:</strong> when a court or public authority
            lawfully requires it.
          </li>
          <li>
            <strong>With your consent:</strong> in any other case, only after we
            ask you clearly.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Students and guardians</h2>
        <ul className={listClass}>
          <li>
            Most of our students are under 18. Accounts for students under 18
            should be opened with a parent or guardian&apos;s knowledge and
            consent.
          </li>
          <li>
            We ask students only for the information needed for their studies.
          </li>
          <li>
            We do not use student data for advertising or behavioral marketing.
          </li>
          <li>
            The app has no public profiles or chat with strangers, so student
            details are not visible to other users.
          </li>
          <li>
            A parent or guardian may ask to view, correct or delete their
            child&apos;s data using the contacts below.
          </li>
          <li>
            If we learn that data of a child under 13 was collected without
            guardian consent, we delete it promptly.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>App permissions</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Permission</th>
                <th className={thClass}>Why we need it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Internet and network state</td>
                <td className={tdClass}>
                  To stream classes, log in and sync data
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Notifications</td>
                <td className={tdClass}>
                  To alert you about classes, tests and announcements
                </td>
              </tr>
              <tr>
                <td className={tdClass}>Storage or file download</td>
                <td className={tdClass}>
                  To download class notes and lecture sheets, where applicable
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={pClass}>
          You can turn off any permission in your device settings at any time.
          Some features may then stop working.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Storage and security</h2>
        <ul className={listClass}>
          <li>Data is transmitted over HTTPS (encrypted).</li>
          <li>
            Passwords are stored hashed, never in readable form.
          </li>
          <li>
            Access to data is limited to team members who need it for their
            role.
          </li>
          <li>
            We keep data while your account is active and as long as needed to
            provide the service. Transaction records may be kept for a period
            required by law and accounting rules.
          </li>
          <li>
            No system on the internet is completely secure, so please do not
            share your password with anyone.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Your rights and data deletion</h2>
        <p className={pClass}>You may ask us at any time to:</p>
        <ul className={listClass}>
          <li>Give you a copy of your data.</li>
          <li>Correct inaccurate data.</li>
          <li>Stop notifications or promotional messages.</li>
          <li>Delete your account and related personal data.</li>
        </ul>
        <p className={pClass}>
          <strong>How to delete your account and data:</strong> Email{" "}
          <a
            href="mailto:contactminaracademy@gmail.com"
            className="text-primary hover:underline"
          >
            contactminaracademy@gmail.com
          </a>{" "}
          with the subject &ldquo;Account deletion request&rdquo; and include
          your registered mobile number or email. After verifying your identity,
          we normally delete your account and personal data within 30 days.
          Transaction records that the law or accounting rules require us to
          keep are the only exception. Deleting your account removes your course
          access and report cards.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Changes to this policy</h2>
        <p className={pClass}>
          We may update this policy from time to time. For important changes we
          will notify you in the app or on the website and update the effective
          date above. Continuing to use the app after a change means you accept
          the updated policy.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>Contact us</h2>
        <p className={pClass}>
          For questions or complaints about this policy, contact us. Support
          hours: every day, 10:00 AM to 10:00 PM (Bangladesh time).
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>
            <strong>Organization:</strong> Minar Academy
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contactminaracademy@gmail.com"
              className="text-primary hover:underline"
            >
              contactminaracademy@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:01886929763" className="text-primary hover:underline">
              01886929763
            </a>
          </li>
          <li>
            <strong>Address:</strong> 5th Floor, Nurul Islam Mansion, East Solo
            Shohor, Chandgoan, Chittagong, Bangladesh
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href="https://minaracademy.com"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              minaracademy.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
