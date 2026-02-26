import Banner from "../../components/Banner";

export default function GenerateTin() {
  return (
    <>
      <Banner page="Generate Tin" link="" img="/images/faq-banner.png" />
      {/*//page content*/}
      <section className=" mx-auto mt-10 bg-white rounded-lg  mb-22">
        {/* image of man stressed on comp */}
        {/*<img src="/pac.jpg" alt="" className=" mb-6 max-h-[320px]" />*/}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Tax Identification Number (TIN)
        </h1>
        <p className="text-gray-700 mb-6">
          To proceed with your registration and ensure compliance with national
          regulations, you are required to obtain a valid{" "}
          <span className="font-semibold">Tax Identification Number (TIN)</span>
          .<br />A Tax Identification Number (TIN) is an official number issued
          by the government to identify individuals and businesses for tax
          purposes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Why You Need a Tax Identification Number
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Enables you to legally conduct business activities</li>
          <li>Allows you to file and pay taxes correctly</li>
          <li>May be required to open certain business bank accounts</li>
          <li>
            Is often needed to apply for government contracts, permits, or
            licenses
          </li>
          <li>Supports financial transparency and regulatory compliance</li>
          <li>Helps you build a verified financial and tax record</li>
          <li>
            Having a valid TIN ensures you operate within the law and can access
            financial and business opportunities without unnecessary
            restrictions.
          </li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-1">
            Don’t Have a TIN?
          </h3>
          <p className="text-gray-700">
            If you do not already have a Tax Identification Number, you can
            generate one through the official government tax portal.
            <br />
            TIN registration is handled solely by the appropriate tax authority.{" "}
            <span className="font-semibold">
              We do not charge any fees for generating a TIN.
            </span>
            <br />
            Once you complete the registration on the official website, please
            return to this platform to continue your setup process.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-800 mb-2">
            👉 Generate Your TIN
          </span>
          <a
            href="https://taxid.nrs.gov.ng/" // Replace with actual government TIN registration URL if different
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors duration-200 shadow"
          >
            Generate TIN Now
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center mb-12">
            (This button will redirect you to the official government tax
            authority website.)
          </p>
        </div>
      </section>
    </>
  );
}
