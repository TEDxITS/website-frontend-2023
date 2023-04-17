export default function TutorialPage() {
  return (
    <>
      <section className="layout z-20 overflow-hidden pt-4 pb-24">
        <div>
          <h1 className='my-5 italic font-medium text-cwhite py-2 px-6 rounded-full bg-gradient-to-r from-cblue to-cred inline'>TEDxITS Ticket Purchase Tutorial</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <ol className="list-disc mt-6">
            <li className="text-cwhite font-semibold flex flex-col list-decimal text-lg lg:text-2xl mb-4">
              1. Open our ticket page from our website
              <small className="text-sm lg:text-lg font-light">tedxits.org/ticket</small>
            </li>
            <li className="text-cwhite font-semibold flex flex-col list-decimal text-lg lg:text-2xl mb-4">
              2. Choose your desired ticket!
              <small className="text-sm lg:text-lg font-light">Be aware that each ticket type is available at certain period</small>
            </li>
            <li className="text-cwhite font-semibold flex flex-col list-decimal text-lg lg:text-2xl mb-4">
              3. Fill out your personal data
              <small className="text-sm lg:text-lg font-light">Make sure the data you filled are valid</small>
            </li>
            <li className="text-cwhite font-semibold flex flex-col list-decimal text-lg lg:text-2xl mb-4">
              4. Choose your seat
              <small className="text-sm lg:text-lg font-light">Only tickets are available for seat selection feature</small>
            </li>
            <li className="text-cwhite font-semibold flex flex-col list-decimal text-lg lg:text-2xl mb-4">
              5. Choose your payment method
              <small className="text-sm lg:text-lg font-light">Make sure to double check your order details before making payment</small>
            </li>
            <li className="text-cwhite font-semibold inline-block list-decimal text-lg lg:text-2xl ">
              <span className="rounded-full py-2 px-6 bg-gradient-to-r from-cblue to-cred"> 6. You're set to go! </span>
            </li>
            <br />
            <p className="text-sm lg:text-lg font-light text-white translate-y-4">Your transaction is a success! <br /> Please wait as our Ticketing Committee will confirm your payment through WhatsApp</p>
          </ol>

          <div>
            <img src="/images/tickets/phone-bg.png" className="translate-x-32" alt="phone-bg" />
          </div>
        </div>
        <footer>
        </footer>
      </section>
      <img src="/images/tickets/footer-bg.png" className="translate-y-4" alt="footer-bg" />
    </>
  )
};
