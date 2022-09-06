import Illustration from '../assets/images/illustration-thank-you.svg'

function ThankYou({ number }: { number: number }) {
  return (
    <div className="w-[375px] rounded-3xl bg-veryDarkBlue p-5">
      <div className="my-2.5 flex flex-col items-center justify-center space-y-8">
        <img className="self-center" src={Illustration} />
        <p className="rounded-full bg-darkBlue px-3 py-1 text-xs text-orange">
          You selected {number} out of 5
        </p>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl text-white">Thank you!</h2>
          <p className="text-sm text-lightGrey">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
